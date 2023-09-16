import React ,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Homepage from '../../Homepage'
import Navbart from '../navbar/Navbart'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import './register.css'
import './style.scss'
const Regis = () => {
     const [popregister, setPopregister]= useState(true)
  return(
        // <div className='box-regis' onClick={setPopregister.bind(this,false)}>
        <>   
           <div className='box-regis'>
             <div className='btn-regis' onClick={(e)=>{ e.stopPropagation()}}>  
                   <Link to='/' className='home-b color-home'><FaLongArrowAltLeft style={{fontSize:'30px', marginRight:'.5rem'}}/> หน้าแรก </Link>
                <div className='head-h color-home'>
                      สมัครสมาชิก
                </div>
               <div className='log-regis'>
                <table className='font-color-f-regis'>ชื่อโปรไฟล์</table>
                <input className='font-pp' type="text" name="" id="" placeholder='ชื่อโปรไฟล์' />
                <table className='font-color-f-regis'>อีเมล</table>
                <input className='font-pp' type="email" name="" id="" placeholder='อีเมล'/>
                <table className='font-color-f-regis'>ชื่อผู้ใช้งาน</table>
                <input className='font-pp' type="text" name="" id="" placeholder='ชื่อผู้ใช้งาน' />
                <table className='font-color-f-regis'>รหัสผ่าน</table>
                <input className='font-pp' type="password" name="" id="" placeholder='รหัสผ่าน' />
                <table className='font-color-f-regis'>ยืนยันรหัสผ่าน</table>
                <input className='font-pp' type="password" name="" id="" placeholder='ยืนยันรหัสผ่าน' />
              </div>
               <div className='btn-log-regis'>
                   <button className='btn-l' type="submit">ลงทะเบียน</button>
               </div>
             </div>
         </div>
     </>
  )
  //  : window.location('/')
}

export default Regis