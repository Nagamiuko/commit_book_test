import React from 'react'
import {ImSearch} from 'react-icons/im'
import { Link } from 'react-router-dom'
import bookshelf from '../../assets/image/bookshelf.png'
import plus from '../../assets/image/plus.png'
import './rightbar.css'
const Rightbar = () => {
  return (
    <div>
        <div className="box-bg">
           <Link>
              <div className="menu-s"> <ImSearch/> </div>
           </Link>
        </div>
        <div className="box-bg">
             <div className="menu-s"><img src={bookshelf}/></div>
        </div>
        <div className="box-bg">
             <div className="menu-s"> <img src={plus} style={{width:'35px', height:'35px'}}/> </div>
        </div>
    </div>
  )
}

export default Rightbar