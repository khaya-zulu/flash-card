export const theme = {
  colors: {
    secondary: '#111111',

    primaryLight: '#bcf1d8',
    primary: '#46d281',
    primaryDark: '#136557',

    red500: '#ef4444',
    red800: '#991b1b',

    slate500: '#64748b',

    white: '#fff',
    black: '#000',
  },
} as const;

export type ThemeColors = keyof (typeof theme)['colors'];
