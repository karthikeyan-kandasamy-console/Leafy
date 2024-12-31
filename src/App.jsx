import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import PlaceHolder from './components/PlaceHolder';
import { useState } from 'react';

function App() {

  console.log(useState());

  const production = process.env.NODE_ENV === 'production';

  console.log(`Production: ${production}`);  

  if (process.env.REACT_APP_DISABLE_CONSOLE_LOG === "true" || production) {
    console.log("------ CONSOLE DISABLED ------");
    console.log = () => { };
    console.debug = () => { };
    console.info = () => { };
    console.warn = () => { };
    console.error = () => { };
  }

  return (
    <div className="App">
      <BrowserRouter>
        <PlaceHolder />
      </BrowserRouter>
    </div>
  );
}

export default App;
