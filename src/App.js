import { useState } from 'react';
import './App.css';
import Dropdown from './components/Header/Dropdown';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Header toggle={toggle}></Header>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <Home></Home>
    </div>
  );
}

export default App;
