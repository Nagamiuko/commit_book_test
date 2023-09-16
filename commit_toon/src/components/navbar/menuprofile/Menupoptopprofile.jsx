import React, { useContext } from 'react'
import './stylemenuprofile.css'
import { SlClose } from "react-icons/sl";
import {RiDoorOpenLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { EditOutlined,FormOutlined , SmileOutlined, InboxOutlined,ShoppingOutlined ,RightOutlined}from '@ant-design/icons'
import { AuthContext } from '../../context/AuthContext';
const Menupro = ({setPopuser}) => {
  const { user,pathImage} = useContext(AuthContext)
  const handClick = () =>{
             localStorage.removeItem('user')
             window.location('/')
    }
  return(
        <div className="menu-i dropdown-menu-right show boxShadow sidenavRight mt-t-p" style={{width:'300px'}}>
          <ul className='box-prof' onClick={(e)=>{e.stopPropagation()}}>
              {/* <li onClick={ setPopuser.bind(this,false)}><RightOutlined className='clos-l' title='ปิด'/></li> */}
               <li className='b-p-f'>
                <img width={60}  src={user?.url} alt="" srcset="" />
                <div className="mt-n">{user.fullname}</div>
                <div className='edit-p'>
                   <Link style={{textDecoration:'none'}}>
                     <div className="col01">
                        <EditOutlined className='icon-t'/> แก้ไขโปรไฟล์
                     </div>
                    </Link>
                </div>
               </li>
              <div className="dropdown"></div>
              <div className="row-flex color-f ">
                <li className='mt-b-'><Link className='-h'><InboxOutlined className='b-k'/> หนังสือที่ฉันชอบ</Link></li>
                <li className='mt-b-'><Link to='/MyCollections' className='-h'>
                    <SmileOutlined className='b-k '/> คอลเลกชันของฉัน</Link>
                </li>
                <li className='mt-b-'><Link to='/MyCollections' className='-h'><FormOutlined /> เพิ่มงานเขียนของฉัน</Link></li>
                <li className='mt-b-'><Link className='-h'><ShoppingOutlined className='b-k ' /> สินค้าของฉัน</Link></li>
              </div>
              <div className="b--f"></div>
              <div className="dropdown"></div>
              <li className='log-out-t flex-bewe '>
                 <Link onClick={handClick} className='color-f -h'>
                   <RiDoorOpenLine className='color-h '/> ออกจากระบบ
                </Link>
                <div className='clo-s' onClick={setPopuser.bind(this,false)}>ปิด</div> 
              </li>
                <div className='flexbar-mobile' onClick={setPopuser.bind(this,false)}><h3>ปิด</h3></div> 
          </ul>
        </div>
  )
}

export default Menupro