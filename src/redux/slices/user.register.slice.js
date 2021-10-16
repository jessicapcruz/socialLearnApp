//Com reduxjs/toolkit, reducers e actions ficam nos arquivos slices
//ver: https://redux-toolkit.js.org/tutorials/quick-start
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';
import userService from './../../services/user.service';

export const registerUser = createAsyncThunk(
    'user/register',
    async ({ name, email, senha, gender }, thunkAPI) => {
        try {
            const response = await userService.register({
                name,
                email,
                senha,
                gender,
            });
            return response.status === 200
                ? response.data
                : thunkAPI.rejectWithValue(response.data);
        } catch (error) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const recover = createAsyncThunk(
    'recover/password',
    async ({ email }, thunkAPI) => {
        try {
            const response = await userService.recover(email);
            return response.status === 200
                ? response.data
                : thunkAPI.rejectWithValue(response.data);
        } catch (e) {
            thunkAPI.rejectWithValue(e.response.data);
        }
    }
);

const userInitialState = {
    register: initialState.register,
    loading: initialState.loading,
};
const userRegisterSlice = createSlice({
    name: 'userRegister',
    initialState: userInitialState,
    reducers: {
        // add your non-async reducers here
        clearState: (state) => {
            state.loading.open = false;
            return state;
        },
    },
    extraReducers: {
        // add your async reducers here
        [registerUser.fulfilled]: (state, { payload }) => {
            state.register = payload.register;
            state.loading.open = false;
            return state;
        },
        [registerUser.rejected]: (state, action) => {
            // eslint-disable-next-line no-unused-vars
            const payload = [...action.payload];
            state.loading.open = false;
        },
        [registerUser.pending]: (state) => {
            state.loading.open = true;
        },
    },
});

export const { clearState } = userRegisterSlice.actions;
export default userRegisterSlice.reducer;
