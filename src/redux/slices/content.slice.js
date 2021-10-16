
//Com reduxjs/toolkit, reducers e actions ficam nos arquivos slices
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import contentService from '../../services/content.service';

const initialState = []

export const registerContent = createAsyncThunk(
    "content/register",
    async ({ name, contentAreaIds}, thunkAPI) => {
        try {
            const response = await contentService.register({ name, contentAreaIds});
            return (response.status === 200 || response.status === 201 || response.status === 204) ? 
                    response.data :  
                    thunkAPI.rejectWithValue(response.data);      
        } catch (error) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const getallContent = createAsyncThunk(
    "content/getAll",
    async (thunkAPI) => {
        try {
            const response = await contentService.getAll();
            return (response.status === 200 || response.status === 201 || response.status === 204) ? 
                    response.data :  
                    thunkAPI.rejectWithValue(response.data);      
        } catch (error) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const deleteContent = createAsyncThunk(
    "content/delete",
    async ({ id }, thunkAPI) => {
        try {
            const response = await contentService.delete(id);
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
    initialState: initialState,
    reducers: {
     // add your non-async reducers here
    },
    extraReducers: {
        // add your async reducers here
        [registerContent.fulfilled]: (state, action) => {
            state.push(action.payload);
        },
        [getallContent.fulfilled]: (state, action) => {
            return [...action.payload];
        },
        [deleteContent.fulfilled]: (state, action) => {
            return [...action.payload];
        },
    }
});

const { reducer } = contentsSlice;
export default reducer;