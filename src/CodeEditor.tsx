import { Editor } from '@monaco-editor/react';
import React, { useEffect, useRef, useState, useCallback } from 'react';

import styles from './codeEditor.module.css';

type deviceType = 'desktop' | 'mobile' | 'tablet';

export interface CodeEditorProps {
  /**
   * Type of device.
   * */
  deviceType?: deviceType;
  /**
   * The hint prop
   * */
  hint?: string[];
}

export const CodeEditor = ({ deviceType = 'desktop', hint }: CodeEditorProps): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [focus, setFocus] = useState<boolean>(false);
  const [fullScreenMode, setFullScreenMode] = useState<boolean>(false);
  const editorRef = useRef<unknown>(null);

  const onEditorChange = (value: string) => {
    setValue(value);
  };

  const onEditorMount = (editor, monaco) => {
    editorRef.current = editor;

    monaco.editor.defineTheme('StremDark', {
      base: 'vs-dark',
      colors: {
        'editor.background': '#252525',
      },
      fontSize: 14,
      rules: [
        {
          fontStyle: 'Montserrat',
          foreground: '#ffffff',
        },
      ],
    });

    monaco.editor.setTheme('StremDark');

    editor.onDidFocusEditorWidget(() => {
      setFocus(true);
    });

    editor.onDidBlurEditorWidget(() => {
      setFocus(false);
      setFullScreenMode(false);
    });
  };

  const openFullScreenMode = useCallback((event: KeyboardEvent) => {
    console.log('Текужее значение фокуса: ' + focus);

    if (event.code === 'F11') {
      event.preventDefault();
      event.stopPropagation();
      setFullScreenMode(true);
    }
  }, []);

  const closeFullScreenMode = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      setFullScreenMode(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', openFullScreenMode);
  }, []);

  useEffect(() => {
    // document.addEventListener('keydown', close);

    return () => {
      document.removeEventListener('keydown', (event) => openFullScreenMode(event, focus));
      document.removeEventListener('keydown', (event) => closeFullScreenMode(event));
    };
  }, []);

  return (
    <>
      <div
        className={fullScreenMode ? styles.editorContainer__fullScreen : styles.editorContainer}
        id="container"
      >
        <Editor
          defaultLanguage={'html'}
          height={'100%'}
          onChange={onEditorChange}
          onMount={onEditorMount}
          theme={'vs-dark'}
          value={value}
          width={'100%'}
        />
      </div>
      {hint && (
        <div className={deviceType === 'desktop' ? styles.editorHint__desktop : styles.editorHint}>
          {hint.map((item, i) => (
            <span key={i}>
              {item}
              <br />
            </span>
          ))}
        </div>
      )}
    </>
  );
};
