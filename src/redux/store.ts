import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './theme/themeSlice';
import translationReducer from './translation/translationSlice';

export default configureStore({
    reducer: {
        translation: translationReducer,
        theme: themeSlice
    },
});