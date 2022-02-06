import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], isLoading: true, errorMsg: '' };

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        updateStart(state) {
            state.items = [];
            state.isLoading = true;
            state.errorMsg = '';
        },
        updateSuccess(state, action) {
            state.items = action.payload.items;
            state.isLoading = false;
            state.errorMsg = '';
        },
        updateError(state, action) {
            state.items = [];
            state.isLoading = false;
            state.errorMsg = action.payload.errorMsg;
        },
        selectedAsFavourite(state, action) {
            console.log(action.payload)
            const itemIndex = state.items.findIndex(item => item.albumId === action.payload.albumId && item.id === action.payload.id);
            state.items[itemIndex].liked = true;
        }
    },
});

export const { updateStart, updateSuccess, updateError, selectedAsFavourite } = gallerySlice.actions;
export default gallerySlice.reducer;