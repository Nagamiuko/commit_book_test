import React,{useState} from 'react'
import './navbar.css'
import Profile from '../../asset/p3.jpg'
import icontitle from '../../asset/icon/icon2.png'
import Userlogin from '../login/Logins'
import Menulistbar from './menubarleft/menubar'
 import Menup from './menuprofile/Menupoptopprofile'
import { Link } from 'react-router-dom'
import {  MenuUnfoldOutlined ,UserOutlined} from '@ant-design/icons';
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
const Navbart =()=> {
      const { user ,pathImage} = useContext(AuthContext)
      const [popupLogin , setPopupLogin] = useState(false)
      const [popmenu , setPopmenu] = useState(false)
      const [popuser , setPopuser] = useState(false)
  return (
    <div>
       <nav>
          <ul className='menu'>
            <li className='icon-title'><img className='' src={icontitle} alt="" srcset="" /></li>
            <li className='logo-icon'><Link to='/' className='logo-b-l color-f'> Commic Novel</Link></li>
            <li className='items '><Link className='logo-menu color-f'>นิยายลิขสิทธิ์</Link></li>
            <li className='items '><Link className='logo-menu color-f'>นิยายแต่ง</Link></li>
            <li className='items '><Link className='logo-menu color-f'>การ์ตูน</Link></li>
            <li className='items '><Link className='logo-menu color-f'>อีบุ๊ค</Link></li>
            <li className='items '><Link className='logo-menu color-f'>แฟนคลับแปล</Link></li>
           {user ? 
               <div className='profile1' onClick={setPopuser.bind(this,true)}> 
                 <Link className='profile'> <img src={user?.url} alt="" srcset="" /> </Link>
                  <div className="menu-profile dropdown-menu-right">
                    {popuser && <Menup setPopuser={setPopuser}/>}
                  </div>  
               </div>
               
           :(  
             <div className='profile2'>
                 <li className='btn-u-u'><UserOutlined className='btn-u icon-size color-f' onClick={setPopupLogin.bind(this, true)} /></li>
                <div className='btn-b-b btn-hov' onClick={setPopupLogin.bind(this, true)}>เข้าสู่ระบบ</div>
                 {popupLogin && <Userlogin setPopupLogin={setPopupLogin}/>}
               </div>
           )}
            <li className='toggle'><MenuUnfoldOutlined onClick={()=>{setPopmenu(true)}} className='logo-menu color-f icon-size'/></li> 
         </ul>
       </nav>
            <div className="menu-m-l">
                <Menulistbar popmenuright={popmenu} setPopmenuitem={setPopmenu}/>
            </div>
    </div>
  )
}
     
export default Navbart