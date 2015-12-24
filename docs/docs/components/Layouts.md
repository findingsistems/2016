# Разметка

Компонент для создания структуры страницы и расположения компонентов.


## Примеры

*Комплексный пример*

```
import React, { Component } from 'react'
import { RowLayout, ColumnLayout, Layout } from 'scalex-ui/components/layout/index'

class LayoutsExample extends Component {
  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <RowLayout>
          <Layout grow={2}>
            <ColumnLayout>
              <Layout grow={2}>
                <RowLayout>
                  <Layout grow={2}>
                    <div style={{background: '#E3F2FD', width: '100%'}} />
                  </Layout>
                  <Layout grow={1}>
                    <div style={{background: '#BBDEFB', width: '100%'}} />
                  </Layout>
                  <Layout basis={'20%'}>
                    <div style={{background: '#90CAF9', width: '100%'}} />
                  </Layout>
                  <Layout basis={'40px'}>
                    <div style={{background: '#64B5F6', width: '100%'}} />
                  </Layout>
                </RowLayout>
              </Layout>
              <Layout grow={1}>
                <div style={{background: '#BBDEFB', width: '100%'}} />
              </Layout>
              <Layout basis={'20%'}>
                <div style={{background: '#90CAF9', width: '100%'}} />
              </Layout>
              <Layout basis={'40px'}>
                <div style={{background: '#64B5F6', width: '100%'}} />
              </Layout>
            </ColumnLayout>
          </Layout>
          <Layout grow={1}>
            <div style={{background: '#BBDEFB', width: '100%'}} />
          </Layout>
          <Layout basis={'20%'}>
            <div style={{background: '#90CAF9', width: '100%'}} />
          </Layout>
          <Layout basis={'40px'}>
            <div style={{background: '#64B5F6', width: '100%'}} />
          </Layout>
        </RowLayout>
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

