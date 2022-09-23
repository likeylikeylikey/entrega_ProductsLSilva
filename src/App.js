import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/Containers/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/Containers/ItemDetailContainer/ItemDetailContainer"
import Persons from "./Components/People/Persons";

function App() {

  const nombreUsuario = "Lucas";
  const apellidoUsuario = "Silva";

  return (
    <>
      <header nombre={nombreUsuario} id="1" apellido={apellidoUsuario}>
        <div className='App'>
      <Navbar />
      <ItemListContainer />
      <Persons />
        </div>
      </header>
    </>
  )
}

export default App;
