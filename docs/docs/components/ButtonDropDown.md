# Выпадающий блок

*Примеры*

```
import React, { Component } from 'react'
import { ItemDropDown, DropDown } from 'scalex-ui/components/dropdown/index'
import ArrowDownIcon from 'scalex-ui/components/icons/ArrowDownIcon'
import { ButtonDropDown } from 'scalex-ui/components/button/index'

class ButtonDropDownItemExample extends Component {
  renderDropDown() {
    return (
      <DropDown onClick={(item) => alert(`Выбран '${item.props.children}'`)}>
        <ItemDropDown>
          Название пункта меню
        </ItemDropDown>
        <ItemDropDown>
          Пункт меню
        </ItemDropDown>
      </DropDown>
    )
  }

  render() {
    return (
      <div style={{height: 120, padding: '10px'}}>
        <ButtonDropDown dropDown={this.renderDropDown()}>
          Простой <ArrowDownIcon width='8' height='8'/>
        </ButtonDropDown>
      </div>
    )
  }
}

export default ButtonDropDownItemExample

```

## Описание

*Properties*

> **dropDown** *Function optional* По умолчанию: нет
> 
> Параметр в которые передается выпадающий блок
