import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '@/entities/Theme/model/themeSlice';
import languageReducer from '@/entities/Language/model/languageSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        language: languageReducer,
    },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store