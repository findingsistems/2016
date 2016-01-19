import { colors } from 'theme'

const button = {
  background: `linear-gradient(to top, ${colors.deepPurple400} 0%, ${colors.deepPurple300} 100%)`,
  '&:hover': {
    background: colors.deepPurple400,
  },
  '&:active': {
    background: `linear-gradient(to bottom, ${colors.deepPurple400} 0%, ${colors.deepPurple300} 100%)`,
  },
}

export {
  button,
}
