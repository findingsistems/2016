# Ссылка

Компонент для отображения ссылок


## Примеры

*Пример действия на ссылке*

```
import React, { Component } from 'react'
import Link from 'scalex-ui/components/link/Link'

class ActionLinkExample extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <Link onClick={() => alert('Действие на ссылке')}>
          Ссылка с действием
        </Link>
      </div>
    )
  }
}

export default ActionLinkExample

```

*Пример перехода по ссылке*

```
import React, { Component } from 'react'
import Link from 'scalex-ui/components/link/Link'

class HrefLinkExample extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <Link href='#/docs/components/Icons.md'>
          Ссылка на документацию иконок
        </Link>
      </div>
    )
  }
}

export default HrefLinkExample
```

## Описание

*Properties*

> **href** *String optional*
> 
> Задает адрес документа для перехода.

*Events*

> Наследуются от [React Events](https://facebook.github.io/react/docs/events.html#supported-events)
