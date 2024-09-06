export const THEME = {
  colors: {
    secondary: '#111111',
    primaryLight: '#bcf1d8',
    primary: '#46d281',
    primaryDark: '#136557',
    red500: '#ef4444',
    red800: '#991b1b',
    white: '#fff',
    slate500: '#64748b',
  },
} as const;

export type ThemeColors = keyof (typeof THEME)['colors'];
