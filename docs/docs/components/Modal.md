# Модальное окно

## Примеры

```
import React, { Component } from 'react'
import { Modal } from 'scalex-ui/components/modal/index'
import { Button } from 'scalex-ui/components/button/index'

class ModalExample extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
  }

  onButtonClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  onClose = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    const { isOpen } = this.state
    return (
      <div style={{ margin: '20px' }}>
        <Modal isOpen={isOpen} onClose={this.onClose} onOutsideClick={this.onClose}>
          <div>Модальное окно</div>
          <Button onClick={this.onClose}>
            Закрыть
          </Button>
        </Modal>
        <Button onClick={this.onButtonClick}>
          {isOpen ? 'Закрыть' : 'Открыть'}
        </Button>
      </div>
    )
  }
}

export default ModalExample
```

## Описание

*Properties*

> **isActive** *boolean optional*
>
> Параметр отвечающий за видимость модального окна

*Events*

> **onClose** *Function optional*
>
> CallBack вызываемый при закрытии модального окна


> **onOutsideClick** *Function optional*
>
> Click event по внешней области.
