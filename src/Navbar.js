import React, {useState, useEffect} from 'react'
import "./css/Navbar.css"
import img from "./img/srcic.png"
import notification from "./img/notific.png"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar__content'>
            <div className='navbar__list'>
                <p className='navbar__logo'>
                    <a href='#'>NETFLIX</a>
                </p>
                <p  className='navbar__list_item'>
                    <a href='#'>Home</a>
                </p>
                <p  className='navbar__list_item'>
                    <a href='#'>TV Shows</a>
                </p>
                <p  className='navbar__list_item'>
                    <a href='#'>Movies</a>
                </p>
                <p  className='navbar__list_item'>
                    <a href='#'>New & Popular</a>
                </p>
                <p  className='navbar__list_item'>
                    <a href='#'>My List</a>
                </p>
                <p  className='navbar__list_item'>
                    <a href='#'>Audio & Subtitles</a>
                </p>

            </div>
            <div className='navbar__search'>
                <img className=' search__icon' src={img} alt='none'/>
                <p className='navbar__search__item'>Kids</p>
               <img className=' search__icon' src={notification} alt="none"/>
                <p className='navbar__search__item'>Profile</p>
            </div>
        </div>

    </div>
  )
}

export default Navbar