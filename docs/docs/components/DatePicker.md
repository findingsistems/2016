# Выбор даты

*Примеры*

```
import React, { Component } from 'react'
import { DatePicker } from 'scalex-ui/components/datepicker/index'

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate()+1);
const selected = {
  from: today, 
  to: tomorrow
}

class DatePickerExample extends Component {
  render() {
    return (
      <div style={{ padding: '20px', height: '450px' }}>
        <div style={{margin: '10px 0'}}>
          <DatePicker selected={today} onChange={(selected) => alert(JSON.stringify(selected))}/>
        </div>
        <div style={{margin: '10px 0'}}>
          <DatePicker selected={selected} range={true} onChange={(selected) => alert(JSON.stringify(selected))}/>
        </div>
      </div>
    )
  }
}

export default DatePickerExample
```

## Описание

*Properties*

> **selected** *Object|Date optional *  По умолчанию: нет
> 
> Выбранная дата, в зависимости от параметра range принимает либо объект **{from: Date, to: Date}**, либо просто Date

> **range** *bool optional* По умолчанию: false
> 
> Выбор интервала на календаре

*Methods*

> **onChange(date)** 
> 
> В зависимости от переданного параметра range возвращшает либо объект с датой, либо отдельное значение
