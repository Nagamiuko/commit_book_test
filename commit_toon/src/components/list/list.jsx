import React from 'react'
import mytest from '../../asset/book02.webp'
import novel01 from '../../asset/novel01.jpg'
import './list.css'
const list = () => {
  return (
    <>
       <div className="box-list">
         <div className="cover-box carousel">
         {/* สามารถทำลูบได้ตั้งแต่ข้างล้างนี้ลงไป */}
            <div className="img-box">
               <img src={novel01} alt="" srcset="" />
             <div className="text-ti">
                  <div className="title-t">
                       ฉันมาทดสอบ
                        <p>ฉันมาทดสอบ</p>
                        <span className='flex-n'><p>ฉันมาทดสอบ</p><p className='text-n'>NEW</p></span>
                  </div>
                </div> 
            </div> 
       {/* สามารถทำลูบได้ตั้งแต่ข้างล้างนี้ลงไป */}
            <div className="img-box">
               <img src={mytest} alt="" srcset="" />
             <div className="text-ti">
                  <div className="title-t">
                       ฉันมาทดสอบ
                        <p>ฉันมาทดสอบ</p>
                        <span className='flex-n'><p>ฉันมาทดสอบ</p><p className='text-n'>NEW</p></span>
                  </div>
                </div> 
            </div> 

            <div className="img-box">
               <img src={mytest} alt="" srcset="" />
             <div className="text-ti">
                  <div className="title-t">
                       ฉันมาทดสอบ
                        <p>ฉันมาทดสอบ</p>
                        <span className='flex-n'><p>ฉันมาทดสอบ</p><p className='text-n'>NEW</p></span>
                  </div>
                </div> 
            </div> 

            <div className="img-box">
               <img src={novel01} alt="" srcset="" />
             <div className="text-ti">
                  <div className="title-t">
                       ฉันมาทดสอบ
                        <p>ฉันมาทดสอบ</p>
                        <span className='flex-n'><p>ฉันมาทดสอบ</p><p className='text-n'>NEW</p></span>
                  </div>
                </div> 
            </div> 

            <div className="img-box">
               <img src={mytest} alt="" srcset="" />
             <div className="text-ti">
                  <div className="title-t">
                       มารหมื่นพิษมารหมื่นพิษมารหมื่นพิษมารหมื่นพิษมารหมื่นพิษ
                        <p>มารหมื่นพิษ</p>
                        <span className='flex-n'><p>มารหมื่นพิษ</p><p className='text-n'>NEW</p></span>
                  </div>
                </div> 
            </div> 

            <div className="img-box">
               <img src={novel01} alt="" srcset="" />
             <div className="text-ti">
                  <div className="title-t">
                       ฉันมาทดสอบ
                        <p>ฉันมาทดสอบ</p>
                        <span className='flex-n'><p>ฉันมาทดสอบ</p><p className='text-n'>NEW</p></span>
                  </div>
                </div> 
            </div> 
         
         </div>
       </div>
    </>
  )
}

export default list