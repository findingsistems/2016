const componentStyles = {
  preferenceContainerStyle: {
    position: 'fixed',
    top: '0px',
    right: '30px',
    zIndex: '2',
  },
}

export default componentStyles

export function getStyleClass(props) {
  const { sheet } = props

  return sheet.classes.preferenceContainerStyle
}
