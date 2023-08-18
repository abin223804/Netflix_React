import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';


function NavBar() {
  return (
    <div className='navbar'>
      <label className='home'>Home</label>
      <label className='tv'>Tv Shows</label>
      <label className='movies'>Movies</label>
      <label className='news'>News&Popular</label>
      <label className='mylist'>Mylist</label>
      <label className='browse'>Browse by Language</label>
      <img className='logo'  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
      <div className="search-icon">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
    </div>
    <div className="notification-icon">
      <FontAwesomeIcon icon={faBell} className="notification-icon" />
    </div>
    
 
  <label class="kids">Kids</label>
  <label class="dvd">DVD</label>
 
   

  {/* <div className='dropdown'>
  <label for="cars"></label>
    <select id="cars" name="cars">
        <option value="volvo"></option>
        <option value="saab"></option>
        <option value="mercedes"></option>
        <option value="audi"></option>
    </select>

  </div> */}
 
   
    

    </div>
  )
}

export default NavBar
