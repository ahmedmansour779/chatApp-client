import { ThemeState } from "./colorsType";

export interface wordsType {
    en: words
    ar: words
}

export type words = {
    login: string,
    welcome: string,
    msgSignIn: string,
    email: string,
    password: string,
    rememberMe: string,
    doHaveAccount: string,
    register: string,
    msgCopyRight: string
}

export interface TranslationState {
    language: keyof wordsType; // Union of available languages
    words: { [key: string]: string };
}

type language = {
    language: "ar" | "en",
    words: words
}


export type RootState = {
    translation: language,
    theme: ThemeState
}