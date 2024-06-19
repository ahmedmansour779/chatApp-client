// themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from '../../types/colorsType';
import { colors } from './colors';


const initialState: ThemeState = {
    mode: 'light',
    colors: colors['light'],
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            state.colors = colors[state.mode];
        },
    },
});

export default themeSlice.reducer
export const { toggleMode } = themeSlice.actions
