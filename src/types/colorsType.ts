export type colors = {
    primary: string,
    seconder: string,
    third: string,
}

export type themeType = {
    light: colors,
    dark: colors
}

export interface ThemeState {
    mode: 'light' | 'dark';
    colors: colors;
}