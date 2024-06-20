import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TranslationState, wordsType } from '../../types/translationTypes';
import { words } from './translationData';

const initialState: TranslationState = {
    language: 'en',
    words: words['en'],
};

export const translationSlice = createSlice({
    name: 'translation',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<keyof wordsType>) => {
            state.language = action.payload;
            state.words = words[action.payload];
        },
    },
});

export const { setLanguage } = translationSlice.actions;

export default translationSlice.reducer;
