import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], isLoading: true, errorMsg: '' };

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        updateStart(state) {
            state.isLoading = true;
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
        }
    }
});

export const { updateStart, updateSuccess, updateError } = albumsSlice.actions;
export default albumsSlice.reducer;
