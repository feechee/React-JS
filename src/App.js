import './App.css';
import React from 'react';
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
  return(
    <>
    <NavBar />
    <div className='container'>
      <ItemListContainer />
    </div>

    </>

  );
};

export default App;
