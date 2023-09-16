import React from 'react'
import A from '../../../asset/book.png'
import B from '../../../asset/manga.png'
import C from '../../../asset/ebook.png'
import './mybooklist.css'
import { Link } from 'react-router-dom'
const Mybooklist = ({setOpenBoxcreate}) => {
  return (
    <div>
        <div className="model-bg" onClick={setOpenBoxcreate.bind(this,false)}>
            <div className="model-content model-bg-s" onClick={(e)=> {e.stopPropagation()}}>
                 <div className="m-h">
                    <button className='btn-closess' onClick={setOpenBoxcreate.bind(this,false)}>x</button>
                    <h2>เลือกประเภทหนังสือ</h2>
                 </div>
                 <div className="m-b">
                    <div className="row">
                      <Link to='/MyCollections/AddNovel' type='button' className="col-item"><img src={A} alt="" /><h className='font-ss'>นิยายเล่ม & นิยายรายตอน</h> </Link>
                      <Link type='button' className="col-item"> <img src={B} alt="" /><h className='font-ss'>การ์ตูน </h></Link>    
                      <Link type='button' className="col-item"><img src={C} alt="" /><h className='font-ss'>นิยายเล่ม & นิยายรายตอน</h></Link>    
                   </div>
                 </div>
            </div>
        </div>
    </div>

  )
}

export default Mybooklist