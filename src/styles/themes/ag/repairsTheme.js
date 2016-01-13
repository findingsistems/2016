import { colors } from 'theme'

const button = {
  color: '#282a29',
  background: `linear-gradient(to top, ${colors.yellow800} 0%, ${colors.yellow500} 100%)`,
  '&:hover': {
    background: colors.yellow500,
  },
  '&:active': {
    background: `linear-gradient(to bottom, ${colors.yellow800} 0%, ${colors.yellow500} 100%)`,
  },
}

export {
  button,
}
