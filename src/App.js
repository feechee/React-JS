import './App.css';
import React from 'react';
import NavBar from "../src/components/NavBar/NavBar"
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer"

const App = () => {
  return(
    <>
    <NavBar />
    <div className='container'>
      <ItemListContainer/>
    </div>

    </>

  );
};

export default App;
