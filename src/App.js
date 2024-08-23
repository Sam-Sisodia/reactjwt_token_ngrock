import logo from './logo.svg';
import './App.css';

import Title from './component/header';
import Loginform from './component/form'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Modules/Login/Login';
import Dashboard from './Modules/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      
    <Routes>
        <Route path="/" element={<Login/>} /> {/* 👈 Renders at /app/ */}
        <Route path="/dashboard" element={<Dashboard/>} /> {/* 👈 Renders at /app/ */}
      </Routes>
  
    </BrowserRouter>
    </div>
  );
}

export default App;
