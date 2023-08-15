import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faBellSlash } from '@fortawesome/free-solid-svg-icons';



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
    
 
  <label class="kids">Kids</label>


   
    

    </div>
  )
}

export default NavBar
