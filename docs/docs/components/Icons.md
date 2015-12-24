# Иконки

*Примеры иконок*

```
import React, { Component } from 'react'
import UserIcon from 'scalex-ui/components/icons/UserIcon'
import InfoIcon from 'scalex-ui/components/icons/InfoIcon'
import ArrowDownIcon from 'scalex-ui/components/icons/ArrowDownIcon'
import ArrowLeftIcon from 'scalex-ui/components/icons/ArrowLeftIcon'
import CodeIcon from 'scalex-ui/components/icons/CodeIcon'
import ListIcon from 'scalex-ui/components/icons/ListIcon'

class IconContainer extends Component {
  render() {
    const {name, children} = this.props
    return (
      <div style={{padding: '10px 20px' , flexBasis: 'calc(25% - 40px)'}}>
        <span>
          {children}
        </span>
        <span style={{fontSize: 12, marginLeft: 5}}>
          {name}
        </span>
      </div>
    )
  }
}

class IconsExample extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <IconContainer name='User'>
          <UserIcon/> 
        </IconContainer>
        <IconContainer name='Info'>
          <InfoIcon/>
        </IconContainer>    
        <IconContainer name='ArrowDown'>
          <ArrowDownIcon/>
        </IconContainer>
        <IconContainer name='ArrowLeft'>
          <ArrowLeftIcon/>
        </IconContainer>
        <IconContainer name='Code'>
          <CodeIcon/>
        </IconContainer>
        <IconContainer name='List'>
          <ListIcon/>
        </IconContainer>
      </div>
    )
  }
}

export default IconsExample
```

*Параметры иконок*

```
import React, { Component } from 'react'
import UserIcon from 'scalex-ui/components/icons/UserIcon'
import InfoIcon from 'scalex-ui/components/icons/InfoIcon'
import ArrowDownIcon from 'scalex-ui/components/icons/ArrowDownIcon'

class IconsConfigExample extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <UserIcon width="50" height="50" valign='top'/>
        <InfoIcon fill="red" valign='middle'/>
        <ArrowDownIcon fill="green" valign='bottom'/>
      </div>
    )
  }
}

export default IconsConfigExample
```
*Логотип*

```
import React, { Component } from 'react'
import LogoBlockIcon from 'scalex-ui/components/icons/LogoBlockIcon'
import LogoImgIcon from 'scalex-ui/components/icons/LogoImgIcon'

class LogoExample extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <LogoBlockIcon width={200} height={50}/>
        <LogoImgIcon width={60} height={50}/>
      </div>
    )
  }
}

export default LogoExample
```


## Описание

*Properties*

> **fill** *String optional*
> 
> Цвет заливки, по умолчанию #737373

> **width** *Number optional*
>
> Ширина, по умолчанию 13px

> **height** *Number optional*
> 
> Высота, по умолчанию 13px

> **valign** *String optional* <top|middle|bottom>
>
> Выравнивание элемента по вертикали