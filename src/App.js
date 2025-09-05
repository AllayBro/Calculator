import React, { useState } from 'react';
import './index.css';

function App() {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');
  const [result, setResult] = useState('');

  const handleEqualClick = () => {
    const x = Number(valueA) || 0;
    const y = Number(valueB) || 0;
    setResult(String(x + y));
  };

  return (
    <div className="wrap">
      <div className="box">
        <div className="row">
          <input
            id="a"
            type="text"
            value={valueA}
            onChange={(e) => setValueA(e.target.value)}
          />
        </div>
        <div className="sign">+</div>
        <div className="row">
          <input
            id="b"
            type="text"
            value={valueB}
            onChange={(e) => setValueB(e.target.value)}
          />
        </div>
        <div className="row">
          <input id="eq" type="button" value="равно" onClick={handleEqualClick} />
        </div>
        <div id="result">{result}</div>
      </div>
    </div>
  );
}

export default App;
