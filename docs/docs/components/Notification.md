# Оповещения

*Пример*

```
import React, { Component } from 'react'
import { Notification } from 'scalex-ui/components/notification/index'
import { Button } from 'scalex-ui/components/button/index'

class NotificationExample extends Component {
  constructor() {
    super()
    this.state = {
      id: 1,
      messages: {
        1: {id: 1, message: 'Message 1'}
      }
    }
  }
  
  onAddButtonClick = () => {
    const { id, messages } = this.state
    const newId = id + 1
    this.setState({
      id: newId,
      messages: {
        ...messages,
        [newId]: {id: newId, message: 'Message ' + newId}
      },
    })
  }

  onClearButtonClick = () => {
    this.setState({
      messages: {}
    })
  }

  onDismiss = (id) => {
    const { messages } = this.state
    delete messages[id]
    this.setState({
      messages
    })
  }

  render() {
    return (
      <div style={{ margin: '20px' }}> 
        <Notification messages={this.state.messages} onDismiss={this.onDismiss}/>
        <Button onClick={this.onAddButtonClick}>
          Добавить сообщение
        </Button>
        <Button onClick={this.onClearButtonClick}>
          Очистить сообщения
        </Button>
      </div>
    )
  }
}

export default NotificationExample
```

## Описание

*Properties*

> **messages** *Object optional* По умолчанию: нет
> 
> Словарь с сообщениями

*Methods*

> **onDismiss(<id>)**
> 
> Событие вызывается при клике по сообщению, в параметры передается **id** сообщения по которому произошел клик для его
> извлечения из списка
