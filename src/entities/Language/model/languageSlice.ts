import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@app/store/store';
import { ThemeSwitcherState } from '@entities/Theme/model/themeSlice';

export interface LanguageSwitcherState {
    language: 'ru' | 'en' | 'sr';
}

const initialState: LanguageSwitcherState = {
    language: 'ru',
};

export const languageSlice = createSlice({
    name: 'language',
    initialState: initialState,
    reducers: {
        switchLanguage: (state, action: PayloadAction<LanguageSwitcherState['language']>) => {
            state.language = action.payload;
        },
    },
});

export const { switchLanguage } = languageSlice.actions;

export default languageSlice.reducer;