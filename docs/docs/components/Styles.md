# Стили

## Цветовая палитра

```
import React, { Component } from 'react'
import Text from 'scalex-ui/components/text/Text'
import { Colors } from 'scalex-ui/styles/index'

class ColorExample extends Component {
  getStyle() {
    const { color, white } = this.props

    return {
      display: 'flex',
      flexDirection: 'row',
      padding: 15,
      background: color.toString(),
      color: white ? 'white' : null
    }
  }

  renderName(name) {
    return (
      <div style={{ flexGrow: 1 }}>
        <Text>
          {name}
        </Text>
      </div>
    )
  }

  renderHex(color) {
    return (
      <div>
        <Text>
          {color.hexString()}
        </Text>
      </div>
    )
  }

  render() {
    const { color, name } = this.props

    return (
      <div style={this.getStyle()}>
        {this.renderName(name)}
        {this.renderHex(color)}
      </div>
    )
  }
}

class ColorPallette extends Component {
  render() {
    return (
      <div style={{ flexBasis: '33%', marginRight: 20 }}>
        {this.props.children}
      </div>
    )
  }
}

class StyleExample extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ColorPallette>
          <ColorExample color={Colors.gray100} name='gray100' />
          <ColorExample color={Colors.gray200} name='gray200' />
          <ColorExample color={Colors.gray300} name='gray300' white />
          <ColorExample color={Colors.gray400} name='gray400' white />
          <ColorExample color={Colors.gray500} name='gray500' white />
          <ColorExample color={Colors.gray600} name='gray600' white />
          <ColorExample color={Colors.gray700} name='gray700' white />
          <ColorExample color={Colors.gray800} name='gray800' white />
          <ColorExample color={Colors.gray900} name='gray900' white />
        </ColorPallette>
    
        <ColorPallette>
          <ColorExample color={Colors.blue100} name='blue100' />
          <ColorExample color={Colors.blue200} name='blue200' />
        </ColorPallette>
    
        <ColorPallette>
          <ColorExample color={Colors.black} name='black' white />
          <ColorExample color={Colors.white} name='white' />
        </ColorPallette>
      </div>
    )
  }
}

export default StyleExample
```
