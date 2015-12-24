# Текст

## Гарнитура

```
import React, { Component } from 'react'
import Text from 'scalex-ui/components/text/Text'
import { font } from 'scalex-ui/styles/index'

class FontFamilyExample extends Component {
  render() {
    return (
      <div style={{ padding: 20, display: 'flex', flexDirection: 'row' }}>
        <div style={{ flexBasis: '100%' }}>
          <div>
            <Text size='large'>
              АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ
            </Text>
          </div>
          <div>
            <Text size='large'>
              абвгдеёжзийклмнопрстуфхцчшщъыьэюя
            </Text>
          </div>
        </div>
        <div style={{ flexBasis: '150px', borderLeft: '1px solid #f2f2f2', paddingLeft: 20 }}>
          <div>
            <Text>
              {font.family}
            </Text>
          </div>
          <div>
            <Text>
              Weight: {font.weight}
            </Text>
          </div>
        </div>
      </div>
    )
  }
}

export default FontFamilyExample

```

## Варианты размера

```
import React, { Component } from 'react'
import Text from 'scalex-ui/components/text/Text'

class FontSizeExample extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <div>
          <Text size='xxlarge'>
            Пример текста с размером XXLarge.
          </Text>
        </div>
        <div>
          <Text size='xlarge'>
            Пример текста с размером XLarge.
          </Text>
        </div>
        <div>
          <Text size='large'>
            Пример текста с размером Large.
          </Text>
        </div>
        <div>
          <Text>
            Пример текста с размером Medium.
          </Text>
        </div>
        <div>
          <Text size='small'>
            Пример текста с размером Small.
          </Text>
        </div>
        <div>
          <Text size='xsmall'>
            Пример текста с размером XSmall.
          </Text>
        </div>
      </div>
    )
  }
}

export default FontSizeExample
```

## Описание

*Properties*

> **size** *String optional* По умолчанию: medium
> 
> Задает размер текста, может принимать одно из **xsmall|small|medium|large|xlarge|xxlarge** значений.
