import { Routes, Route } from "react-router";
import Menu from "./pages/Menu"
import Home from "./pages/Home";
import Create from "./pages/Create";
import Register from "./pages/Register"
import Login from "./pages/Login";
import OnePost from "./pages/OnePost"
import './App.css';

export default function App() {
  
  return (
          <Routes>
            <Route path="/" element={<Menu />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/Create" element={<Create />}/>
            <Route path="/Register" element={<Register />}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/OnePost" element={<OnePost />}/>
          </Routes>
  )
}

