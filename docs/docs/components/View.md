# Шаблоны

## Примеры

*Пример простого шаблона*

```
import React, { Component } from 'react'
import View from 'scalex-ui/components/view/View'

class ViewExample extends Component {
  render() {
    return (
      <div style={{ height: 300, position: 'relative', background: 'rgb(234, 234, 234)' }}>
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <View />
        </div>
      </div>
    )
  }
}

export default ViewExample
```

## Описание

*Properties*

> **width** *Number optional*
> 
> Задает ширину.

> **Height** *Number optional*
> 
> Задает высоту.
