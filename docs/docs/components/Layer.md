# Слой

Компонент для абсолютного позицианирования элементов относительно других элементов на странице.

## Примеры

*Привязки нижнего левого угла блока к правому верхнему углу.*

```
import React, { Component } from 'react'
import Layer from 'scalex-ui/components/layer/Layer'

class LayerExample extends Component {
  render() {
    return (
      <div style={{ margin: '70px 20px 20px 20px' }}>
        <div style={{ width: 50, height: 50, background: '#03A9F4' }}>
          <Layer align='bl-tr'>
            <div style={{ width: 100, height: 50, background: '#B3E5FC', fontFamily: 'Arial', fontSize: 12 }} />
          </Layer>
        </div>
      </div>
    )
  }
}

export default LayerExample
```

## Описание

*Properties*

> **align** *String optional*
>
> Настройка привязки элементов. Задается парами значений "элемент привязки"-"элемента для привязки".
> Используется сокращенная форма записи
> &nbsp;&nbsp;&nbsp;&nbsp;t - **top**
> &nbsp;&nbsp;&nbsp;&nbsp;r - **right**
> &nbsp;&nbsp;&nbsp;&nbsp;b - **bottom**
> &nbsp;&nbsp;&nbsp;&nbsp;l - **left**
> Пример *"tl-br"*, разворачивается в конструкцию *"top left-bottom right"* и привязывает верхний лувый угол к правому нижнему краю элемента.

> **target** *DOM Element optional*
>
> Элемент для привязки, по умолчанию элемент контейнер.

*Events*

> **onOutsideClick** *Function optional*
>
> Click event по внешней области.
