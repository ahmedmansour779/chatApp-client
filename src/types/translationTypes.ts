import { ThemeState } from "./colorsType";
import { UserState } from "./userTypes";

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
    msgCopyRight: string,
    registerAccount: string,
    msgRegisterAccount: string,
    personalPicture: string,
    terms: string,
    alreadyHaveAccount: string,
    userName: string,
    uploadYourPhoto: string,
    dataIncomplete: string,
    alreadyUserAccount: string,
    vialedUserName: string,
    vialedPassword: string,
    vialedEmail: string,
    EmailNotCorrect: string,
    PasswordNotCorrect: string,
    chats: string,
    recently: string,
    searchHere: string,
    myProfile: string,
    light: string,
    dark: string,
    welcomeDoot: string,
    msgWelcomeDoot: string,
    activeUser: string,
    notActiveUser: string,
    placeHolderMassageInput: string
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
    theme: ThemeState,
    user: UserState
}