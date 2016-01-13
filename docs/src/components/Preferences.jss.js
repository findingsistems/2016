const componentStyles = {
  preferences: {
    display: 'inline-block',
    cursor: 'pointer',
    padding: '5px',
    boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.2)',
    background: '#fff',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.02)',
    },
  },
}

export default componentStyles

export function getStyleClass(props) {
  const { sheet } = props

  return sheet.classes.preferences
}
