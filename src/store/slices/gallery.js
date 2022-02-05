import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], isLoading: true, errorMsg: '' };

const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        getGallery(state, action) {
            state.items = action.payload.items;
            state.isLoading = action.payload.isLoading;
            state.errorMsg = action.payload.errorMsg
        },
        setGalleryToInitialState(state, action) {
            action.payload = { ...initialState }
        }
    }
});



export const { getGallery, setGalleryToInitialState } = gallerySlice.actions;
export default gallerySlice.reducer;