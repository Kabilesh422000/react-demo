import logo from './logo.svg';
import { useState } from "react";
import Login from "./components/Login/Login";
import './App.css';

const App = () =>{

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
  <button onClick = {() => setIsOpen(true)}>login </button>
  <LoginModal isOpen ={isOpen} setIsOpen ={setIsOpen}/>
    </>
  );
}

export default App;
