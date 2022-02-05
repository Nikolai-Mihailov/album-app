import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        add(state, action) {
            const itemExists = state.find(item => item.albumId === action.payload.albumId && item.id === action.payload.id);

            !itemExists ? state.push({ ...action.payload, liked: true }) :
                state = removeItem(state, action.payload);

        },
        remove(state, action) {
            state = removeItem(state, action.payload);
        },
        liked(state, action) {
            state = state.items;
        }
    }
});

export const { add, remove } = favouritesSlice.actions;
export default favouritesSlice.reducer;

function removeItem(array, item) {
    const removeIndex = array.findIndex(element => element.albumId === item.albumId && element.id === item.id);
    array.splice(removeIndex, 1);
    return array;
}