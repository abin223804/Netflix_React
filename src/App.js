import React from 'react';
import {action, originals,HorrorMovies,ComedyMovies} from './urls'
import './App.css';
import NavBar from './components/NavBar/Navbar';
import Banner from './components/Banner/Banner';
import Rowpost from './components/RowPost/RowPost';



function App() {
  return (
   <div className='App'> 
   
   <NavBar/>
   <Banner/>
   <Rowpost url={originals} title='Netflix Originals'/>
   <Rowpost url={action} title='Action' isSmall/>
   <Rowpost url={HorrorMovies} title='Horror' isSmall/>
   <Rowpost url={ComedyMovies} title='Comedy' isSmall/>
   

   </div>
  );
}

export default App;
