import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div className="">
     <Header></Header>
     <Routes>

       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/orders" element={<Orders></Orders>}></Route>
     </Routes>
    </div>
  );
}

export default App;
