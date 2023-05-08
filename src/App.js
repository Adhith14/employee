import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Forms from './components/Forms';
import Viewdata from './components/Viewdata';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path='/' element={<Viewdata/>}/>
      <Route path='/table' element={<Forms/>}/>
      </Routes>
    

    </div>
  );
}

export default App;
