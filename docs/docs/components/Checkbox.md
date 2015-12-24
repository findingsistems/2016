# Чекбокс

*Примеры*

```
import React, { Component } from 'react'
import { Checkbox } from 'scalex-ui/components/checkbox/index'

class CheckboxExample extends Component {
  constructor() {
    super()
    this.state = {
      active: false
    }
  }
  
  onChange(checked) {
    this.setState({
      active: checked
    })
  }


  render() {
    return (
      <div style={{ padding: 20 }}>
        <div>
          <Checkbox onChange={this.onChange.bind(this)} /> {`Активна: ${this.state.active}`}
        </div>
        <div>
          <Checkbox disabled={true} /> Заблокирован
        </div>
        <div>
          <label htmlFor='#1'><Checkbox id='#1' /> Можно нажать по тексту</label>
        </div>
      </div>
    )
  }
}

export default CheckboxExample
```

## Описание

*Properties*

> **id** *String optional* По умолчанию: нет
> 
> Иденетификатор для привязки к label

> **onChange** *function optional* По умолчанию: нет
> 
> Callback в который приходит текущее состояние чекбокса

> **checked** *bool optional* По умолчанию: false
> 
> Инициализация состояния чекбокса

> **disabled** *bool optional* По умолчанию: false
> 
> Блокирует доступ и изменение чекбокса
