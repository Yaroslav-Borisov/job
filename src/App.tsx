import { useState, useEffect, useRef } from 'react';
import './App.css';

function App(): JSX.Element {
  const [text, setText] = useState('');
  const [counter, setCounter] = useState(0);
  const [lines, setLines] = useState([]);

  const [onFocus, setFocus] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
    setCounter(e.target.value.split('').filter((item) => item == '\n').length);
  };

  useEffect(() => {
    const arr = Array(counter + 1).fill('');
    const linesArr = arr.map((item, i) => (item = i + 1));
    setLines(linesArr);
  }, [setCounter, counter]);

  const textAreaRef = useRef(null);

  window.onkeydown = (evt) => {
    switch (evt.keyCode) {
      //ESC
      case 27:
        evt.preventDefault();
        console.log('esc');
        break;
      //F1
      case 122:
        evt.preventDefault();
        console.log('f11');
        break;
      default:
        return;
    }
  };

  return (
    <div className="container">
      <div className="numbers">
        {lines.map((item, i) => {
          return <span key={i}>{i + 1}</span>;
        })}
      </div>
      <textarea className="default" value={text} onChange={(e) => onChange(e)} ref={textAreaRef} />
    </div>
  );
}

export default App;
