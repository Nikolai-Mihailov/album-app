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
            console.log(action.items)
        },
        updateError(state, action) {
            state.items = [];
            state.isLoading = false;
            state.errorMsg = action.payload.errorMsg;
        },
        setGalleryToInitialState(state, action) {
            action.payload = { ...initialState }
        }
    }
});


export const { updateStart, updateSuccess, updateError, setGalleryToInitialState } = gallerySlice.actions;
export default gallerySlice.reducer;