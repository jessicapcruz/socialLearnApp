
//Com reduxjs/toolkit, reducers e actions ficam nos arquivos slices
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import initialState from '../initialState';
import contentService from './../../services/content.service';

export const registerContent = createAsyncThunk(
    "content/register",
    async ({ name, contentAreaIds}, thunkAPI) => {
        try {
            const response = await contentService.register({ name, contentAreaIds});
            return (response.status === 200) ? 
                    response.data :  
                    thunkAPI.rejectWithValue(response.data);      
        } catch (error) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const contentsSlice = createSlice({
    name: "contentRegister",
    initialState: initialState.content,
    reducers: {
     // add your non-async reducers here
        clearState: (state) => {
            state.contentAreas = [];
            state.name = '';
            state.id = null;
            return state;
        }
    },
    extraReducers: {
        // add your async reducers here
        [registerContent.fulfilled]: (state, { payload }) => {
            console.log('fullfilled', payload);
            state = payload;
            return state;
        },
        [registerContent.rejected]: (state, { payload }) => {
            console.log('rejected', payload);
            state = payload;
        },
        [registerContent.pending]: (state) => {
            //state.loading.open = true;
        },
    }
});

export const { clearState } = contentsSlice.actions;
export default contentsSlice.reducer;