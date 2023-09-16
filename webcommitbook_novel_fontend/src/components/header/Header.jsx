import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {
  return (
    <>
       <div className="header-box-bg">
            <nav className="container-box">
              <Link className='logo'>WebcommitBook Novels</Link>      
           </nav>
       </div>
    </>
  )
}

export default Header