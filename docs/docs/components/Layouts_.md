# Разметка

Компонент для создания структуры страницы и расположения компонентов.


## Примеры

*Комплексный пример*

```
import React, { Component } from 'react'
import { Layout } from 'scalex-ui/components/layout_/index'

class LayoutsExample extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: 500, padding: 20, boxSizing: 'border-box' }}>
        <div style={{ width: '100%', height: '200px', display: 'inline-block', border: '1px solid red' }}>
          <Layout vertical fullHeight verticalSpaceBetween='5'>
            <Layout demo='1' justify='center'>
              по контенту
            </Layout>
            <Layout demo='2' basis='50%' freeze>
              <Layout demo='3' padding='20px' basis='50px'>
                <div>вся оставшаяся</div>
              </Layout>
              <Layout demo='1'>
                <div>вся оставшаяся высота</div>
              </Layout>
              <Layout demo='3'>
                <div>вся оставшаяся высота</div>
              </Layout>
            </Layout>
            <Layout demo='2' justify='center' basis='50%' freeze>
              <div>вся оставшаяся высота</div>
            </Layout>
            <Layout demo='3' justify='center'>
              по контенту
            </Layout>
          </Layout>
        </div>
      </div>
    )
  }
}

export default LayoutsExample
```

## Описание

*Properties*

> **grow** *number optional*
> 
> Принимает значения css свойства [flex-grow](https://drafts.csswg.org/css-flexbox-1/#propdef-flex-grow)

> **shrink** *number optional*
> 
> Принимает значения css свойства [flex-shrink](https://drafts.csswg.org/css-flexbox-1/#propdef-flex-shrink)

> **basis** *number|string optional*
> 
> Принимает значения css свойства [flex-basis](https://drafts.csswg.org/css-flexbox-1/#propdef-flex-basis)

