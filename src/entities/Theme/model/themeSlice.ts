import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@app/store/store";

export interface ThemeSwitcherState {
    theme: 'light' | 'dark';
}

const initialState: ThemeSwitcherState = {
    theme: 'light',
};

export const themeSLice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        switchTheme: (state: ThemeSwitcherState) => {
            state.theme === 'light' ? state.theme = 'dark' : state.theme ='light';
        }
    }
})

export const {switchTheme} = themeSLice.actions;

export default themeSLice.reducer;