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
              font.family
            </Text>
          </div>
          <div>
            <Text>
              Weight: font.weight
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
          <Text fontSize='22px'>
            Пример текста с размером XXLarge.
          </Text>
        </div>
        <div>
          <Text fontSize='20px'>
            Пример текста с размером XLarge.
          </Text>
        </div>
        <div>
          <Text fontSize='18px'>
            Пример текста с размером Large.
          </Text>
        </div>
        <div>
          <Text>
            Пример текста с размером Medium.
          </Text>
        </div>
        <div>
          <Text fontSize='12px'>
            Пример текста с размером Small.
          </Text>
        </div>
        <div>
          <Text fontSize='11px'>
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

> **color** *String optional* По умолчанию: black
> 
> Задает размер текста, может принимать различные CSS значения.
> Например: color='black'; color='#F6F6F6'


> **fontSize** *String optional* По умолчанию: 13px
> 
> Задает размер текста, состоит из цифровых значений и 'px' префикса.
> Например: fontSize='11px'
