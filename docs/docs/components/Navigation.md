# Навигация

*Примеры*

```
import React, { Component } from 'react'
import { Navigation, Item, ItemGroup } from 'scalex-ui/components/navigation/index'
import { ItemDropDown, DropDown } from 'scalex-ui/components/dropdown/index'
import UserIcon from 'scalex-ui/components/icons/UserIcon'

class NavigationExample extends Component {
  render() {
    return (
      <div style={{ height: 100 }}>
        <Navigation>
          <ItemGroup>
            <Item>
              Пункт меню
            </Item>
            <Item>
              Название пункта меню
            </Item>
          </ItemGroup>
          <ItemGroup align='right'>
            <Item border={false}>
              <UserIcon width='12' height='12' />
            </Item>
            <Item border='left'>
              Пункт меню
            </Item>
          </ItemGroup>
        </Navigation>
      </div>
    )
  }
}

export default NavigationExample

```

*Примеры*

```
import React, { Component } from 'react'
import { Navigation, Item, ItemGroup } from 'scalex-ui/components/navigation/index'
import { ItemDropDown, DropDown } from 'scalex-ui/components/dropdown/index'
import ArrowDownIcon from 'scalex-ui/components/icons/ArrowDownIcon'

class DropDownItemExample extends Component {
  renderMenu() {
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
      <div style={{height: 120}}>
        <Navigation>
          <ItemGroup>
            <Item subMenu={this.renderMenu()}>
              Простой <ArrowDownIcon width='8' height='8'/>
            </Item>
            <Item subMenu={this.renderMenu()}>
              Простой 2 <ArrowDownIcon width='8' height='8'/>
            </Item>
          </ItemGroup>
        </Navigation>
      </div>
    )
  }
}

export default DropDownItemExample
```

## Описание

*Properties*

> **align** *String optional* <left|right>
> 
> Выравнивание блока по левому или правому краю

> **direction** *String optional* <left|right>
>
> Выравнивание текста в выпадающем меню

> **border** *String optional* <left|right|false>
> 
> Сторона с которой будет установлена видимая граница элемента
