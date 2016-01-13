# Кнопка

*Примеры кнопок*

```
import React, { Component } from 'react'
import { Button, ButtonGroup } from 'scalex-ui/components/button/index'

class ButtonExample extends Component {
  render() {
    return (
      <div>
        <div style={{ margin: '20px' }}>
          <Button onClick={() => alert('Действие на кнопке')}>
            Кнопка
          </Button>
        </div>
        <div style={{ margin: '20px' }}>
          <Button disabled={true}>
            Заблокированная
          </Button>
        </div>
        <div style={{ margin: '20px' }}>
          <Button parts roundLeft color="white">
            Найти
          </Button>
          <Button repairs roundRight>
            Найти
          </Button>
        </div>
        <div style={{ margin: '20px' }}>
          <Button catalog round fontSize="14px">
            Показать телефон
          </Button>
        </div>
      </div>
    )
  }
}

export default ButtonExample
```

## Описание

*Properties*

> **type** *String optional* <default|primary> По умолчанию: default
> 
> Внешний вид кнопки

> **active** *bool optional* По умолчанию: false
> 
> Кнопка в нажатом состоянии

> **disabled** *bool optional* По умолчанию: false
> 
> Кнопка в заблокированном состоянии

*Methods*

> **onClick(events)** 
> 
> Клик по кнопке
