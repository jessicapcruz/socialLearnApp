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
            return (response.status === 200) ? 
                    response.data :  
                    thunkAPI.rejectWithValue(response.data);  
        } catch (error) {
            thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const searchInitialState = { search: initialState.conteudo, loading: initialState.loading };
const searchRegisterSlice = createSlice({
    name: "search",
    initialState: searchInitialState,
    reducers: {
        // add your non-async reducers here
        clearState: (state) => {
            state.loading.open = false;
            return state;
        },
    },
    extraReducers: {
        // add your async reducers here
        [searchContent.fulfilled]: (state, { payload }) => {
            console.log('fullfilled', payload);
            state.conteudo = payload.conteudo;
            state.loading.open = false;
            return state;
        },
        [searchContent.rejected]: (state, action) => {
            const payload = [...action.payload];
            console.log('rejected', payload);
            state.loading.open = false;
        },
        [searchContent.pending]: (state) => {
            state.loading.open = true;
        },
    }
});

export const { clearState } = searchRegisterSlice.actions;
export default searchRegisterSlice.reducer;