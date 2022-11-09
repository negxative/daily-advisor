import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './RouterFiles/Router';
import { Navbar } from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
       <Navbar/>
      <div className="Main-Container">
        <Router/>
      </div>

    </BrowserRouter>
   
  );
}

export default App;
