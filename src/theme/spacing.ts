/**
  Use these spacings for margins/paddings and other whitespace throughout your app.
 */
export const spacing = {
  micro: 2,
  tiny: 4,
  extraSmall: 8,
  small: 12,
  medium: 16,
  large: 24,
  extraLarge: 32,
  huge: 48,
  massive: 64,
  extraMassive: 96,
  ultraMassive: 128,
  ultraMassive2: 256,
  ultraMassive3: 512,
} as const;

export type Spacing = keyof typeof spacing;
