//Com reduxjs/toolkit, reducers e actions ficam nos arquivos slices
//ver: https://redux-toolkit.js.org/tutorials/quick-start
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';
import initialState from '../initialState';
import searchService from './../../services/search.service';

export const searchContent = createAsyncThunk(
    "learningContents",
    async ({ data }, thunkAPI) => {
        try {
            const response = await searchService.search({ data });
            return (response.status === 200 || response.status === 201 || response.status === 204) ? 
            response.data :  thunkAPI.rejectWithValue(response.data);  
        } catch (error) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const searchInitialState = { search: initialState.search};
const searchRegisterSlice = createSlice({
    name: "learningContents",
    initialState: searchInitialState,
    reducers: {
        // add your non-async reducers here
        clearState: (state) => {
            
            return state;
        },
    },
    extraReducers: {
        
        // add your async reducers here
        [searchContent.fulfilled]: (state, { payload }) => {
            state.conteudo = payload.conteudo;
          
            return state;
        },
        [searchContent.rejected]: (state, action) => {
            const payload = [...action.payload];
            
        },
        [searchContent.pending]: (state) => {
            
        },
    }
});

export default searchRegisterSlice;
export const { clearState } = searchRegisterSlice.actions;
export const searchSelector = state => state.search
