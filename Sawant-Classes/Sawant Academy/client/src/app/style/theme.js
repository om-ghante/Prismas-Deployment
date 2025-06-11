// styles/themes.js - Light and Dark Theme Definitions

import { colors } from './colors.js';

export const themes = {
  light: {
    // Primary colors for light theme
    primary: {
      main: colors.primary[600],
      light: colors.primary[400],
      dark: colors.primary[700],
      contrast: colors.white,
    },

    // Secondary colors for light theme
    secondary: {
      main: colors.secondary[600],
      light: colors.secondary[400],
      dark: colors.secondary[700],
      contrast: colors.white,
    },

    // Tertiary colors for light theme
    tertiary: {
      main: colors.tertiary[600],
      light: colors.tertiary[400],
      dark: colors.tertiary[700],
      contrast: colors.white,
    },

    // Quaternary colors for light theme
    quaternary: {
      main: colors.quaternary[600],
      light: colors.quaternary[400],
      dark: colors.quaternary[700],
      contrast: colors.white,
    },

    // Background and surface colors
    background: {
      primary: colors.white,
      secondary: colors.neutral[50],
      tertiary: colors.neutral[100],
    },

    // Text colors
    text: {
      primary: colors.neutral[900],
      secondary: colors.neutral[700],
      tertiary: colors.neutral[500],
      inverse: colors.white,
    },

    // Border colors
    border: {
      primary: colors.neutral[200],
      secondary: colors.neutral[100],
      tertiary: colors.neutral[50],
    },
  },

  dark: {
    // Primary colors for dark theme
    primary: {
      main: colors.primary[400],
      light: colors.primary[300],
      dark: colors.primary[600],
      contrast: colors.black,
    },

    // Secondary colors for dark theme
    secondary: {
      main: colors.secondary[400],
      light: colors.secondary[300],
      dark: colors.secondary[600],
      contrast: colors.black,
    },

    // Tertiary colors for dark theme
    tertiary: {
      main: colors.tertiary[400],
      light: colors.tertiary[300],
      dark: colors.tertiary[600],
      contrast: colors.black,
    },

    // Quaternary colors for dark theme
    quaternary: {
      main: colors.quaternary[400],
      light: colors.quaternary[300],
      dark: colors.quaternary[600],
      contrast: colors.black,
    },

    // Background and surface colors
    background: {
      primary: colors.neutral[900],
      secondary: colors.neutral[800],
      tertiary: colors.neutral[700],
    },

    // Text colors
    text: {
      primary: colors.white,
      secondary: colors.neutral[200],
      tertiary: colors.neutral[400],
      inverse: colors.black,
    },

    // Border colors
    border: {
      primary: colors.neutral[700],
      secondary: colors.neutral[800],
      tertiary: colors.neutral[600],
    },
  },
};