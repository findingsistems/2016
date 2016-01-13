const componentStyles = {
  navigation: {
    '& p': {
      paddingLeft: '15px',
    },
    '& a': {
      textDecoration: 'none',
      lineHeight: '28px',
      fontSize: '14px',
      color: '#666',
      '&:hover': {
        color: '#f26b00',
      },
    },
  },
}

export default componentStyles

export function getStyleClass(props) {
  const { sheet } = props

  return sheet.classes.navigation
}
