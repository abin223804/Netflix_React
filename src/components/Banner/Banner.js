import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_button'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>

            </div>
            <h1 className='description'>
            Using Lorem ipsum to focus attention on graphic elements in a webpage design
            </h1>

        </div>
        <div className="fade_bottom">
           
        </div>
      
    </div>
  )
}

export default Banner
