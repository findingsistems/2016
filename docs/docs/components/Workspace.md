# Рабочая область

Компонент для вывода информации слоями, с возможностью переключения между ними.

## Примеры

*Пример рабочей области с несколькими экранами*

```
import React, { Component } from 'react'
import Workspace from 'scalex-ui/components/workspace/Workspace'
import Screen from 'scalex-ui/components/workspace/Screen'
import View from 'scalex-ui/components/view/View'

class WorkspaceExample extends Component {
  render() {
    return (
      <div style={{ height: 300, background: 'rgb(234, 234, 234)' }}>
        <Workspace onTransition={(screen, index) => { alert(`Переход на экран ${index + 1}.`) }}>
          <Screen>
            <View>
              <div style={{ padding: 20 }}>
                Первый экран
              </div>
            </View>
          </Screen>
          <Screen>
            <View>
              <div style={{ padding: 20 }}>
                Второй экран
              </div>
            </View>
          </Screen>
        </Workspace>
      </div>
    )
  }
}

export default WorkspaceExample
```

## Описание

*Events*

> **onTransition**
>
> Событие перехода к определенному экрану.
