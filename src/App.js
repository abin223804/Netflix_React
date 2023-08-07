import React from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/RowPost/RowPost';


function App() {
  return (
   <div className='App'> 
   
   <NavBar/>
   <Banner/>
   <Rowpost/>

   </div>
  );
}

export default App;
