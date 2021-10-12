//Com reduxjs/toolkit, reducers e actions ficam nos arquivos slices
//ver: https://redux-toolkit.js.org/tutorials/quick-start
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import initialState from '../initialState';
import userService from './../../services/user.service';

export const registerUser = createAsyncThunk(
    "user/register",
    async ({ name, email, senha, gender }, thunkAPI) => {
        try {
            const response = await userService.register({ name, email, senha, gender});
            return (response.status === 200) ? 
                    response.data :  
                    thunkAPI.rejectWithValue(response.data);      
        } catch (error) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const recover = createAsyncThunk(
    "recover/password",
    async ({ email }, thunkAPI) => {
      try {
          console.log('email ' + email)
        const response = await userService.recover(email);
        return (response.status === 200)? response.data :  thunkAPI.rejectWithValue(response.data);      
      } catch (e) {
        thunkAPI.rejectWithValue(e.response.data)
      }
    }
);

const userInitialState = { register: initialState.register, loading: initialState.loading };
const userRegisterSlice = createSlice({
    name: "userRegister",
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
            console.log('fullfilled', payload);
            state.register = payload.register;
            state.loading.open = false;
            return state;
        },
        [registerUser.rejected]: (state, action) => {
            const payload = [...action.payload];
            console.log('rejected', payload);
            state.loading.open = false;
        },
        [registerUser.pending]: (state) => {
            state.loading.open = true;
        },
    }
});

export const { clearState } = userRegisterSlice.actions;
export default userRegisterSlice.reducer;