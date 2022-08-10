import React from 'react';
import { useState } from 'react'
import { ChildArea } from './ChildArea';
import './styles.css';

function App() {
  const [text, setText] = useState(0);
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);


  return (
    <div className="App">
      <input type="text" onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}

export default App;
