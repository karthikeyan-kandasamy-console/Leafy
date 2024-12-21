import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import PlaceHolder from './components/PlaceHolder';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PlaceHolder />
      </BrowserRouter>
    </div>
  );
}

export default App;
