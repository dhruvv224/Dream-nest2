import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Login' element={<Login/>}/>


      </Routes>
     
    </div>
  );
}

export default App;
