const componentStyles = {
  navigationContainerStyle: {
    overflowY: 'auto',
    flexBasis: '20%',
    paddingLeft: '20px',
    borderRight: '1px solid rgba(0, 0, 0, 0.1)',
  },
}

export default componentStyles

export function getStyleClass(props) {
  const { sheet } = props

  return sheet.classes.navigationContainerStyle
}
