import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '@entities/Theme/model/themeSlice';
import languageReducer from '@entities/Language/model/languageSlice';

export const makeMockStore = (preloadedState?:unknown) => configureStore({
    reducer: {
        theme: themeReducer,
        language: languageReducer,
    },
    preloadedState: preloadedState,
});