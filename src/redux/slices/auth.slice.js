
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import initialState from '../initialState';
import authService from './../../services/auth.service';

export const login = createAsyncThunk(
    "login",
    async ({ username, senha }, thunkAPI) => {
      try {
        const response = await authService.authenticate(username, senha);
        return (response.status === 200 || response.status === 201 || response.status === 204)? response.data :  thunkAPI.rejectWithValue(response.data);      
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data)
      }
    }
)

const authState = initialState.auth;
const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        clearState: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isFetching = false;
            return state;
        },
    },
    extraReducers: {
        [login.fulfilled]: (state, { payload }) => {
            console.log('fullfilled', payload);
            localStorage.setItem("token", payload.access_token);
            state.email = payload.email;
            state.username = payload.name;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [login.rejected]: (state, { payload }) => {
            console.log('rejected', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [login.pending]: (state) => {
            state.isFetching = true;
        },
    }
});

export default authSlice;
export const { clearState } = authSlice.actions;
export const authSelector = state => state.auth