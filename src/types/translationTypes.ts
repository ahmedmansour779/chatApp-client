import { ThemeState } from "./colorsType";

export interface wordsType {
    en: words
    ar: words
}

export type words = {
    login: string
}

export interface TranslationState {
    language: keyof wordsType; // Union of available languages
    words: { [key: string]: string };
}

type language = {
    language: "ar" | "en" | "de",
    words: words
}


export type RootState = {
    translation: language,
    theme: ThemeState
}