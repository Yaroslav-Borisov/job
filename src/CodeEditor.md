Code editor.

[Figma](https://www.figma.com/file/AzLtYhDoOp2ssMQDxw5hcw/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D0%B9-%D0%BA%D0%B0%D0%B1%D0%B8%D0%BD%D0%B5%D1%82?type=design&node-id=6849-297278&mode=design&t=Uw6dyFEwePreVEvE-0)

#### EmailTemplateCard with deviceType = 'desktop'

```jsx
import { CodeEditor } from './CodeEditor';

<CodeEditor
  deviceType={'desktop'}
  hint={[
    'Для удобства вашей работы предусмотрен полноэкранный режим редактора кода.',
    '1. Для перехода в полноэкранный режим вставьте курсор в редактор и нажмите F11.',
    '2. Для выхода из полноэкранного режима нажмите Esc.',
  ]}
/>;
```

#### EmailTemplateCard with deviceType = 'tablet' | 'mobile'

```jsx
import { CodeEditor } from './CodeEditor';

<CodeEditor
  deviceType={'mobile'}
  hint={[
    'Для удобства вашей работы предусмотрен полноэкранный режим редактора кода.',
    '1. Для перехода в полноэкранный режим вставьте курсор в редактор и нажмите F11.',
    '2. Для выхода из полноэкранного режима нажмите Esc.',
  ]}
/>;
```
