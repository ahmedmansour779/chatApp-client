import { configureStore } from '@reduxjs/toolkit';
import userSlice from './auth/userSlice';
import themeSlice from './theme/themeSlice';
import translationReducer from './translation/translationSlice';

export default configureStore({
  reducer: {
    translation: translationReducer,
    theme: themeSlice,
    user: userSlice
  }
});