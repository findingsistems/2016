# Гриды

Компонент для отображения списков


## Примеры

*Базовая конфигурация*

```
import React, { Component } from 'react'
import Grid from 'scalex-ui/components/grid/Grid'
import { RowLayout, ColumnLayout, Layout } from 'scalex-ui/components/layout/index'
import AutoLayout from 'scalex-ui/components/layout/AutoLayout'
import Cell from 'scalex-ui/components/grid/cell/Cell'
import Link from 'scalex-ui/components/link/Link'

class GridExample extends Component {
  getColumns() {
    return [{
      name: 'number',
      flex: 1,
      header: {
        title: '№',
      },
      cell: (props) => {
        return (
          <Cell>
            <Link>
              {props.entity.number}
            </Link>
          </Cell>
        )
      }
    },
    {
      name: 'name',
      flex: 1,
      header: {
        title: 'Наименование',
      },
    }]
  }

  getEntities() {
    return [{
      name: 'Entity 1',
      number: 'ER0015',
    },
    {
      name: 'Entity 2',
      number: 'ER0016',
    }]
  }

  render() {
    return (
      <div style={{ height: 200 }}>
        <RowLayout>
          <AutoLayout grow={1}>
            <Grid columns={this.getColumns()} entities={this.getEntities()} />
          </AutoLayout>
        </RowLayout>
      </div>
    )
  }
}

export default GridExample
```
