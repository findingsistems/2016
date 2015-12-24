import Color from 'color2'

export const color = {
  black: Color.from({ r: 0, g: 0, b: 0 }),
  white: Color.from({ r: 255, g: 255, b: 255 }),
  gray100: Color.from({ r: 252, g: 252, b: 252 }),
  gray200: Color.from({ r: 242, g: 242, b: 242 }),
  gray300: Color.from({ r: 191, g: 191, b: 191 }),
  gray400: Color.from({ r: 153, g: 153, b: 153 }),
  gray500: Color.from({ r: 117, g: 117, b: 117 }),
  gray600: Color.from({ r: 97, g: 97, b: 97 }),
  gray700: Color.from({ r: 66, g: 66, b: 66 }),
  gray800: Color.from({ r: 33, g: 33, b: 33 }),
  gray900: Color.from({ r: 15, g: 15, b: 15 }),
  blue100: Color.from({ r: 121, g: 160, b: 193 }),
  blue200: Color.from({ r: 42, g: 100, b: 150 }),
}

export const font = {
  family: '"Arial Regular", Arial',
  weight: '400',
  size: {
    xsmall: '11px',
    small: '12px',
    medium: '13px',
    large: '16px',
    xlarge: '18px',
    xxlarge: '22px',
  },
}
