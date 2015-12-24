# Группа кнопок

*Пример*

```
import React, { Component } from 'react'
import { Button, ButtonGroup } from 'scalex-ui/components/button/index'
import { Text } from 'scalex-ui/components/text/index'

class ButtonGroupExample extends Component {
  constructor() {
    super()
    this.state = {
      value: null
    }
  }
  
  onChange = (value) => {
    this.setState({
      value
    })
  }


  render() {
    return (
      <div style={{ margin: '20px' }}> 
        <ButtonGroup selected={this.state.value} onChange={this.onChange}>
          <Button type='primary' value='По группе товаров'>
            По группе товаров
          </Button>
          <Button type='default' value='По единому дисконтному коду (EDC)'>
            По единому дисконтному коду (EDC)
          </Button>
        </ButtonGroup>
        <span style={{ marginLeft: 20 }}>
          <Text>
            {this.state.value && ` Выбрано: ${this.state.value}`}
          </Text>
        </span>
      </div>
    )
  }
}

export default ButtonGroupExample
```

*Пример с множественным выбором*

```
import React, { Component } from 'react'
import { Button, ButtonGroup } from 'scalex-ui/components/button/index'
import { Text } from 'scalex-ui/components/text/index'

class ButtonGroupMultiSelectExample extends Component {
  constructor() {
    super()
    this.state = {
      value: []
    }
  }
  
  onChange = (value) => {
    this.setState({
      value
    })
  }


  render() {
    return (
      <div style={{ margin: '20px' }}> 
        <ButtonGroup multiple={true} selected={this.state.value} onChange={this.onChange}>
          <Button type='default' value='Телефон'>
            Телефон
          </Button>
          <Button type='primary' value='Мобильный телефон'>
            Мобильный телефон
          </Button>
          <Button type='default' value='Email'>
            Email
          </Button>
        </ButtonGroup>
        <span style={{ marginLeft: 20 }}>
          <Text>
            {this.state.value.length > 0 && ` Выбрано: ${this.state.value}`}
          </Text>
        </span>
      </div>
    )
  }
}

export default ButtonGroupMultiSelectExample
```

## Описание

*Properties*

> **multiple** *bool optional* По умолчанию: false
> 
> Множественный выбор

> **selected** *<array|string|number> optional* По умолчанию: \[ \]
> 
> Выбранные элементы, в зависимости от параметра **multiple** зависит передаваемый тип значения


*Methods*

> **onChange(<array|string|number>)** 
> 
> Событие вызывается при изменении значения, в зависимости от параметра **multiple** зависит тип возвращаемое значение
