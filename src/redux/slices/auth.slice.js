
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import initialState from '../initialState';
import authService from './../../services/auth.service';

export const loginAuth = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
      try {
        const response = await authService.authenticate(email, password);
        console.log("response", response);
        if (response.status === 200) {
            localStorage.setItem("token", response.data.token)
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
        [loginAuth.fulfilled]: (state, { payload }) => {
            state.email = payload.email;
            state.username = payload.name;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        },
        [loginAuth.rejected]: (state, { payload }) => {
            console.log('payload', payload);
            state.isFetching = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },
        [loginAuth.pending]: (state) => {
            state.isFetching = true;
        },
    }
});

//Redux cria as actions atuomaticamente para nós
export const { clearState } = authSlice.actions;
export const authSelector = (state) => state.auth;
export default authSlice;