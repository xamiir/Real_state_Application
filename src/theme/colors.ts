// TODO: write documentation for colors and palette in own markdown file and add links from here

const palette = {
  main: '#4338A3',
  white: '#fff',
  dark: '#000',
  darkGrey: '#0f172a',
  grey: '#64748B',
  lightGrey: '#d1d5db',
  lightGrey2: '#94a3b8',

  error: '#F43F5E',
  success: '#10B981',
  label: '#64748B',
  inputs: '#CBD5E1',
  disabledBrand: '#818CF8',
  slate: '#F1F5F9',
  slate50: '#f8fafc',
  slate100: '#e2e8f0',
  slate600: '#475569',
  slate500: '#64748b',

  primary100: '#F4E0D9',
  primary200: '#E8C1B4',
  primary300: '#DDA28E',
  primary400: '#D28468',
  primary500: '#C76542',
  primary600: '#A54F31',

  secondary100: '#DCDDE9',
  secondary200: '#BCC0D6',
  secondary300: '#9196B9',
  secondary400: '#626894',
  secondary500: '#41476E',

  accent100: '#FFEED4',
  accent200: '#FFE1B2',
  accent300: '#FDD495',
  accent400: '#FBC878',
  accent500: '#FFBB50',

  angry100: '#F2D6CD',
  angry500: '#C03403',

  // button
  button: '#1e40af',
  buttonHover: '#574EA8',
  buttonActive: '#2C245D',

  overlay20: 'rgba(25, 16, 21, 0.2)',
  overlay50: 'rgba(25, 16, 21, 0.5)',
} as const;

export const colors = {
  /**
   * The palette is available to use, but prefer using the name.
   * This is only included for rare, one-off cases. Try to use
   * semantic names as much as possible.
   */

  palette,
  /**
   * A helper for making something see-thru.
   */
  transparent: 'rgba(0, 0, 0, 0)',
  /**
   * The default text color in many components.
   */
  text: palette.white,
  dark: palette.dark,
  lightGrey2: palette.lightGrey2,
  /**
   * Secondary text information.
   */
  textDim: palette.label,
  /**
   * The default color of the screen background.
   */
  // button
  button: palette.button,
  background: palette.main,

  gradient: ['#574EA8', palette.main],
  /**
   * The default border color.
   */
  border: palette.inputs,
  /**
   * The main tinting color.
   */
  tint: palette.primary500,
  /**
   * A subtle color used for lines.
   */
  separator: palette.inputs,

  /**
   * Success messages and icons.
   */
  success: palette.success,
  /**
   * Error messages.
   */
  error: palette.angry500,
  /**
   * Error Background.
   *
   */
  errorBackground: palette.angry100,
};
