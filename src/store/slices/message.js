import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false, type: 'success', message: '' };

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        update(state, action) {
            state.open = action.payload.open;
            state.type = action.payload.type;
            state.message = action.payload.message;
        }
    }
});

export const { update } = messageSlice.actions;
export default messageSlice.reducer;

