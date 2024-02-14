import './App.css';
import { CodeEditor } from './CodeEditor';

function App(): JSX.Element {
  return (
    <>
      <h1>Мой редактор</h1>
      <CodeEditor
        deviceType={'desktop'}
        hint={[
          'Для удобства вашей работы предусмотрен полноэкранный режим редактора кода.',
          '1. Для перехода в полноэкранный режим вставьте курсор в редактор и нажмите F11.',
          '2. Для выхода из полноэкранного режима нажмите Esc.',
        ]}
      ></CodeEditor>
    </>
  );
}

export default App;
