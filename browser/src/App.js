import {useState} from 'react';
import './App.css';

function App() {
let valueX = '';
  const [text, setText] = useState('Ingrese texto');

  return (
            <>
            <header>
              <p>Bienvenido</p>
            </header>
            <div className='FullScreen'>
              <div className='Main'>
                <h1>Buscar:</h1>
                <input type="text" onChange={
                  e => {
                    valueX = e.target.value;
                    console.log(`Respuesta:     ${valueX}`)
                  }
                  }></input>
                <button onClick={() => setText(valueX)} >Send</button>
                <p className='result'>Your name is {text}.</p>
              </div>
            </div>
            </>
  );
}

export default App;
