import React from 'react'
import './list_top.css'
import novel01 from '../../asset/book02.webp'
import novel02 from '../../asset/novel01.jpg'
import novel03 from '../../asset/novel03.jpeg'
import novel04 from '../../asset/novel04.jpeg'
const list_top = () => {
  return (
    <>
       <div className="list-top-bar">
             <div className="list-top-box-item carousel1 ">
                   <div className="img-box-item">
                         <img className='img-item-box-top' src={novel02} alt="" srcset="" />
                   </div>
                   <div className="img-box-item">
                         <img className='img-item-box-top' src={novel03} alt="" srcset="" />
                   </div>
                   <div className="img-box-item">
                         <img className='img-item-box-top' src={novel04} alt="" srcset="" />
                   </div>
              
             </div>
       </div>
    </>
  )
}

export default list_top