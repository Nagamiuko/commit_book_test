import React ,{ useState }from 'react'
import Navbar from '../navbar/Navbart'
import { Link } from 'react-router-dom'
import IconBook from '../../asset/icon/book.png' 
import IconBook2 from '../../asset/icon/book2.png' 
import IconBook3 from '../../asset/icon/ok.png' 
import IconBook4 from '../../asset/icon/ebook.png' 
import IconBook5 from '../../asset/icon/notebook.png' 
import IconBook7 from '../../asset/novel01.jpg' 
import Mybooklist from './mybooklist/Mybooklist'
import { PlusCircleOutlined ,AppstoreOutlined} from '@ant-design/icons'
import './cn.css'
const Novelcommic = () => {
   const [openboxcreate , setOpenBoxcreate] = useState(false)
  return (
    <div className='body'>
          <div className="box-s"><Navbar /></div>
                 {openboxcreate && <Mybooklist setOpenBoxcreate={setOpenBoxcreate}/>}
        <div className="mybox-c-n">
           <div className="box-n-c">
              <div className="title-n">
                 <div className='btn-t' onClick={setOpenBoxcreate.bind(this,true)}><PlusCircleOutlined className='icon-c' /> เพิ่มหนังสือ</div>
                 <p>หนังสือของฉัน</p>
              </div>
              <div className="bar-r-r"></div>
             <div className="menu-btn-i">
               <ul className='btn-bt-s'>
                  <button className='btn'><p><AppstoreOutlined className='icon-f' /> ทั้งหมด</p></button>
                  <button className='btn'><img className='icon-ii' src={IconBook} alt="" /><p>นิยายลิขสิทธิ์</p></button>
                  <button className='btn'><img className='icon-ii' src={IconBook2} alt="" /><p>นิยายแต่ง</p></button>
                  <button className='btn'><img className='icon-ii' src={IconBook3} alt="" /><p>การ์ตูน</p></button>
                  <button className='btn'><img className='icon-ii' src={IconBook4} alt="" /><p>อีบุ๊ค</p></button>
                  <button className='btn'><img className='icon-ii' src={IconBook5} alt="" /><p>แฟนคลับแปล</p></button>
               </ul>
            </div>
             <div className="bar-r-r"></div>
             <div className="menu-setting">
                <table className='t-b'>คอลเลกชันของฉัน</table>
             <div className="bar-r-r"></div>
            <ul>
                <li className='n-i-c'>
                  <div className="box-i-c">
                        <Link className='i-c'>
                           <div className="img-n-i-c">
                              <img src={IconBook7} alt="" />
                           </div> 
                           <div className="t-n font-u">MyTestMyTestMyTestMyTest</div>
                        </Link>
                  </div>
                 </li>
            </ul>
      </div>
           <div className="bar-r-r"></div>
   </div>
     </div>
</div>
  )
}

export default Novelcommic