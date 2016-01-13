import { colors } from 'theme'

const button = {
  padding: '8px',
  border: '0',
  borderRadius: '2px',
  color: '#313131',
  background: `linear-gradient(to bottom, ${colors.gray50} 0%, ${colors.gray200} 100%)`,
  boxShadow: '0.5px 1px 3px rgba(0,0,0,.55),inset .5px 1px 2px rgba(255,255,255,.5)',
  '&:hover': {
    background: `linear-gradient(to bottom, ${colors.gray50} 0%, ${colors.gray300} 100%)`,
  },
  '&:active': {
    background: `linear-gradient(to top, ${colors.gray50} 0%, ${colors.gray300} 100%)`,
    boxShadow: 'inset 1px 1.5px 3px rgba(0,0,0,.5)',
  },
}

export {
  button,
}
