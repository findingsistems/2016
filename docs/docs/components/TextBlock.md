# Текстовый блок для ввода

*Примеры*

```
import React, { Component } from 'react'
import { Input } from 'scalex-ui/components/input/index'
import { Label } from 'scalex-ui/components/label/index'
import { Field } from 'scalex-ui/components/field/index'
import { RowLayout, ColumnLayout, Layout } from 'scalex-ui/components/layout/index'

class TextBlockExample extends Component {
  render() {
    return (
      <div style={{ padding: 20 }}>
        <div style={{ margin: '10px 0' }}>
          <Field>
            <Label>Заголовок</Label>
            <Input value='Текстовая информация'/>
          </Field>
        </div>
        <div style={{ margin: '10px 0' }}>
          <Field>
            <Label direction='right'>Заголовок</Label>
            <Input value='Заблокированное поле' disabled={true}/>
          </Field>
        </div>
        <div style={{ margin: '10px 0' }}>
          <Field>
            <Input value='Только для чтения' readOnly={true}/>
          </Field>
        </div>
        <div style={{ margin: '10px 0' }}>
          <Input placeholder='Текст placeholder'/>
        </div>
        <RowLayout>
          <Layout>
            <ColumnLayout>
              <Layout>
                <Field>
                  <Label>Заголовок</Label>
                  <Input value='Текстовая информация' hideBorder='right'/>
                </Field>
              </Layout>
              <Layout>
                <Field>
                  <Label>Заголовок</Label>
                  <Input value='Текстовая информация'/>
                </Field>
              </Layout>
              <Layout>
                <Field>
                  <Label>Заголовок</Label>
                  <Input type='password' value='Текстовая информация' hideBorder='left'/>
                </Field>
              </Layout>
            </ColumnLayout>
          </Layout>
        </RowLayout>
      </div>
    )
  }
}

export default TextBlockExample
```

## Описание
### Input

*Properties*

> **onChange** *function optional* По умолчанию: нет
> 
> Callback в который приходит текущее состояние

> **onClick** *function optional* По умолчанию: нет
> 
> Событие возникающие при клике по элементу

> **onKeyDown** *function optional* По умолчанию: нет
>
> Событие возникающие при нажатии клавиши при установленном фокусе в текстовом поле

> **value** *<String|Number> optional* По умолчанию: нет
> 
> Инициализация состояния поля

> **placeholder** *<String|Number> optional* По умолчанию: нет
> 
> Placeholder

> **disabled** *bool optional* По умолчанию: false
> 
> Блокирует доступ и изменение поля

> **name** *string optional* По умолчанию: нет
>
> Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать

> **type** *string optional* По умолчанию: text
>
> Сообщает браузеру, к какому типу относится элемент формы

> **readOnly** *bool optional* По умолчанию: false
> 
> Текстовое поле не может изменяться пользователем

> **hideBorder** *string optional* <left|right> По умолчанию: нет
> 
> Скрыть отображение правой или левой границы текстового поля

### Label

*Properties*

> **direction** *bool optional* <left|right> По умолчанию: left
> 
> Выравнивание текста 
