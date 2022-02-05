import { applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import albumsReducer from './slices/albums';
import galleryReducer from './slices/gallery';
import favouritesReducer from './slices/favourites';

const redusers = combineReducers({
    albums: albumsReducer,
    gallery: galleryReducer,
    favourites: favouritesReducer
})

const persistConfig = {
    key: 'favourites',
    storage
};

const persisteReducer = persistReducer(persistConfig, redusers);
const store = configureStore({
    reducer: persisteReducer,
    middleware: [thunk]
}, composeWithDevTools(
    applyMiddleware(thunk),
));
export const persistor = persistStore(store);
export default store;