const componentStyles = {
  contentContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },

  childrenContainer: {
    padding: '10px 50px 25px 50px',
  },
}

export default componentStyles

export function getStyle(props) {
  return componentStyles.childrenContainer
}

export function getStyleClass(props) {
  const { sheet } = props

  return sheet.classes.contentContainer
}
