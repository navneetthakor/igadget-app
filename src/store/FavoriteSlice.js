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
            return state.filter((iteam) => iteam._id !== action.payload)
        }
    }
});

export const {fadd,fremove} = favoriteSlice.actions;
export default favoriteSlice.reducer;