import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/image/anime.gif'
import './footer.css'
const Buttonbar = () => {
  return (
    <>
      <div className="button-box-bg">
          <Link className='logo'><img src={Logo}/> WebcommitBook Novels</Link>
          <nav className='navigation'>
               <Link>นิยาย</Link>
               <Link>การ์ตูน</Link>
               <Link>อีบุ๊ค</Link>
               <Link>นิยายแต่ง</Link>
               <Link>การ์ตูนแฟนครับแต่ง</Link>
          </nav>
          <button className='btn-login'>ล็อกอินเข้าสู่ระบบ / สมัครสมาชิก</button>
      </div>
    </>
  )
}

export default Buttonbar