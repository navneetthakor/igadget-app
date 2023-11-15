import { createSlice } from '@reduxjs/toolkit';

const initialState = [];
const favoriteSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        fadd(state, action){
            state.push(action.payload);
        },
        fremove(state, action){
            state.pop(action.payload);
        }
    }
});

export const {fadd,fremove} = favoriteSlice.actions;
export default favoriteSlice.reducer;