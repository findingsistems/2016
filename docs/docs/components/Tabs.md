# Табы

*Примеры*

```
import React, { Component } from 'react'
import { Tabs, Tab } from 'scalex-ui/components/tabs/index'

class TabsExample extends Component {
  render() {
    return (
      <div style={{padding: '20px', height: '200px'}}>
        <Tabs>
          <Tab title='Первый таб'>
            <div style={{ padding: 20 }}>
              Текст таба
            </div>
          </Tab>
          <Tab title='Второй таб'>
            <div style={{ padding: 20 }}>
              Другой текст
            </div>
          </Tab>
        </Tabs>
      </div>
    )
  }
}

export default TabsExample
```


## Описание

*Properties*

> **title** *String required* 
> 
> Заголовок таба

