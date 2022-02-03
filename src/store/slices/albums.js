import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], isLoading: true, errorMsg: '' };

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {
        getAlbums(state, action) {
            state.items = action.payload.items;
            state.isLoading = action.payload.isLoading;
            state.errorMsg = action.payload.errorMsg
        }
    }
});

export const albumsAction = albumsSlice.actions;
export default albumsSlice.reducer;