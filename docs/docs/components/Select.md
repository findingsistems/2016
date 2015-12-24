# Списки для выбора

*Примеры*

```
import React, { Component } from 'react'
import { Select } from 'scalex-ui/components/select/index'

class SelectExample extends Component {
  constructor() {
    super()
    this.state = {
      options: [
        {value: 1, text: 'One'},
        {value: 2, text: 'Two'},
        {value: 3, text: 'Three'},
        {value: 4, text: 'Four'},
        {value: 5, text: 'Five'},
        {value: 6, text: 'Six'},
        {value: 7, text: 'Seven'},
        {value: 8, text: 'Eight'},
        {value: 9, text: 'Nine'},
      ],
      valueSingle: {value: 2, text: 'Two'},
      valueMulti: [{value: 2, text: 'Two'}],
    }
  }
  render() {
    const { options, valueSingle, valueMulti } = this.state

    return (
      <div style={{ height: 400, padding: 20 }}>
        <div style={{marginBottom: 20}}>
          <Select value={valueSingle} options={options} />
        </div>
        <Select value={valueMulti} options={options} multiple />
      </div>
    )
  }
}

export default SelectExample

```

## Описание

*Properties*

> **multiple** *bool optional* По умолчанию: false
>
> Множественный выбор

> **selected** *<array|object> optional* По умолчанию: \[ \]
>
> Выбранные элементы, в зависимости от параметра **multiple** зависит передаваемый тип значения


*Methods*

> **onChange(<array|string|number>)**
>
> Событие вызывается при изменении значения, в зависимости от параметра **multiple** зависит тип возвращаемое значение

