import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import albumsReducer from './slices/albums'

const store = configureStore({
    reducer: { albums: albumsReducer }
}, composeWithDevTools(
    applyMiddleware(thunk),
));

export default store;