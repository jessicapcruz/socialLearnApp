
//Com reduxjs/toolkit, reducers e actions ficam nos arquivos slices
import { createSlice } from '@reduxjs/toolkit';
import initialState from '../initialState';

const contentState = initialState.content;
const contentsSlice = createSlice({
    name: "contents",
    initialState: contentState,
    reducers: {
        contentAdded(state, action) {
            state.push(action.payload);
        },
    },
});

//Redux cria as actions atuomaticamente para nós
export const { contentAdded } = contentsSlice.actions;
//Reducer para configurar na store  
export default contentsSlice.reducer;