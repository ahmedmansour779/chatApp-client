export type colors = {
    backgroundSidebar: string,
    textSidebar: string,
    backgroundSearchSection: string,
}

export type themeType = {
    light: colors,
    dark: colors
}

export interface ThemeState {
    mode: 'light' | 'dark';
    colors: colors;
}