import color from 'color2'

import { colors } from 'theme'

const roundRadius = '4px'

const round = {
  borderRadius: roundRadius,
}

const roundLeft = {
  borderRadius: roundRadius,
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
}

const roundRight = {
  borderRadius: roundRadius,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
}

const button = {
  height: '35px',
  border: '0px',
  padding: '0 18px',
  fontFamily: 'sans-serif',
  fontWeight: 400,
  fontSize: '17px',
  cursor: 'pointer',
  outline: 'none',
  boxShadow: '1px 1px 3px -1px rgba(0, 0, 0, 0.5)',
  '&:disabled': {
    opacity: '0.5',
    boxShadow: 'none',
    cursor: 'default',
  },

  '&:active': {
    boxShadow: '1px 2px 4px 0 rgba(0, 0, 0, .4) inset',
  },
}

const text = {
  color: colors.black,
}

export {
  button,
  text,
  round,
  roundLeft,
  roundRight,
}
