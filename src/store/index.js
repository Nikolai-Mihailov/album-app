import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';

import albumsReducer from './slices/albums';
import galleryReducer from './slices/gallery';
import favouritesReducer from './slices/favourites';

const store = configureStore({
    reducer: { albums: albumsReducer, gallery: galleryReducer, favourites: favouritesReducer }
}, composeWithDevTools(
    applyMiddleware(thunk),
));

export default store;