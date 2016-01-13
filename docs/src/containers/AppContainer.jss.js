const componentStyles = {
  appContainer: {
    display: 'flex',
    position: 'absolute',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '300',
    overflow: 'hidden',
  },

  contentContainer: {
    flexBasis: '80%',
    height: '100%',
  },
}

export default componentStyles

export function getContentContainerStyle(props) {
  return componentStyles.contentContainer
}

export function getStyleClass(props) {
  const { sheet, isContainer } = props

  if (isContainer) {
    return sheet.classes.contentContainer
  }

  return sheet.classes.appContainer
}
