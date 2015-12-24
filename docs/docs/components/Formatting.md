# Форматирование

```
import React, { Component } from 'react'
import {
  date,
  currency,
  currencyWithName,
  currencyWithCode,
  currencyRate,
  percent,
  percentWithFraction
} from 'scalex-ui/utils/formatter/index'

class ExampleContainer extends Component {
  render() {
    return (
      <div style={{ margin: '10px 20px' }}>
        <span>
          {this.props.title}
        </span>
        <span style={{margin: '0 10px'}}>
          -
        </span>
        <span>
          {this.props.children}
        </span>
      </div>
    )
  }
}

class FormattingExample extends Component {
  render() {
    return (
      <div>
        <ExampleContainer title='Дата'>
          {date('2015-07-02T12:02:25.879+03:00')}
        </ExampleContainer>
        <ExampleContainer title='Валюта'>
          {currency(25)}
        </ExampleContainer>
        <ExampleContainer title='Валюта с наименованием'>
          {currencyWithName(25)}
        </ExampleContainer>
        <ExampleContainer title='Валюта с кодом'>
          {currencyWithCode(25)}
        </ExampleContainer>
        <ExampleContainer title='Курс валют'>
          {currencyRate(25)}
        </ExampleContainer>
        <ExampleContainer title='Проценты'>
          {percent(0.25)}
        </ExampleContainer>
        <ExampleContainer title='Проценты с дробной частью'>
          {percentWithFraction(0.2565)}
        </ExampleContainer>
      </div>
    )
  }
}

export default FormattingExample
```
