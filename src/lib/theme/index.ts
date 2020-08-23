import { createTheming, ThemingType } from '@callstack/react-theme-provider';
import resolveConfig from 'tailwindcss/resolveConfig';

const tailwindConfig =  require('../../../tailwind.config');
const fullConfig = resolveConfig(tailwindConfig);

export type Theme = {
  tailwind?: any // TODO: provide a better types
  palette: {
    [key: string]: string
  }
};

export const themes: { [key: string]: Theme } = {
  default: {
    tailwind: fullConfig,
    palette: {
      black: 'gray-900',
      white: 'gray-100',
      default: 'gray-400',
      primary: 'blue-700',
      secondary: 'gray-900',
      success: 'green-400',
      warning: 'yellow-500',
      alert: 'red-400',
    }
  }
}

const { ThemeProvider, withTheme, useTheme  }: ThemingType<Theme> = createTheming(
  themes.default
);

export { ThemeProvider, withTheme, useTheme  };