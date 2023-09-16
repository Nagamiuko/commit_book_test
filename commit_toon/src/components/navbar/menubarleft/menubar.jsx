import React from 'react'
import { Link } from 'react-router-dom'
import'./menubar.css'
import logoanime from '../../../asset/anime.gif'
import {LeftOutlined} from '@ant-design/icons'
const menubar = (menupop) => {
  return (menupop.popmenuright)? (
    <>
       <div className="menu-box">
          <div className="menu-tap">
            <ul className='menu-bar'>
            <div className="top-p">
               <button className="btn-close close-c" onClick={()=> menupop.setPopmenuitem(false)}>
                 <LeftOutlined className='arrow-right' />
                <span className="visually-hidden">Close</span>
              </button>
            </div>
            <li className='img-logo'><img className='img-g' src={logoanime} alt="" srcset="" /></li>
            <li className='logo'>Commic Novel</li>
            <li className='menu-list '><Link to='/' className='font'><p>หน้าแรก</p></Link></li>
            <li className='menu-list '><Link className='font'><p>นิยายลิขสิทธิ์</p></Link></li>
            <li className='menu-list '><Link className='font'><p>นิยายแต่ง</p></Link></li>
            <li className='menu-list '><Link className='font'><p>การ์ตูน</p></Link></li>
            <li className='menu-list '><Link className='font'><p>อีบุ๊ค</p></Link></li>
            <li className='menu-list '><Link className='font'><p>แฟนคลับแปล</p></Link></li> 
          </ul>
          </div>
       </div>
    </>
  ):""
}

export default menubar