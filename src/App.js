import logo from './logo.svg';
import './App.css';
import {Navbar} from "./Components/Navbar"
import { Routes, Route } from "react-router-dom"
import {Login} from "./Components/Login"


function App() {
  return (
    <div className="App">
     <Navbar />
       <Routes>
         <Route path='/' />
         <Route path="/login" element={<Login />} />
         <Route path="/products/:id" element={<Products />} />
       </Routes>
    </div>
  );
}

export default App;
