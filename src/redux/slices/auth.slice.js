
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import initialState from '../initialState';
import authService from './../../services/auth.service';

export const login = createAsyncThunk(
    "login",
    async ({ username, password }, thunkAPI) => {
      try {
        console.log('calling', username, password);
        const response = await authService.authenticate(username, password);
        console.log("response", response);
        if (response.status === 200) {
            return response.data;
        } 
        else return thunkAPI.rejectWithValue(response.data)
      } catch (e) {
        console.log("Error", e.response.data)
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
            localStorage.setItem("token", payload.token);
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