import axios from 'axios'
import React ,{useEffect,useState}from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Navbar from '../../navbar/Navbart'
import { TbBookUpload } from 'react-icons/tb'
import cover from '../../../asset/coverbok.png'
import cover2 from '../../../asset/images.jpeg'
import { AiFillCaretLeft } from 'react-icons/ai'
import './mycreatB.css'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import parser from 'html-react-parser'
const MycreatN = () => {
  const [imagecover , setImages] = useState([])
  const [imageURL , setImageURL] = useState([])
  const [textFile , setTextfile] = useState("")
  const [create, setCreate] = useState({
       titlename:undefined,
       authorname:undefined,
       traname:undefined,
       value:undefined,
       value1:undefined,
       value2:undefined,
       textsynopsis:undefined,   
    })
  
  const handleChange = (e) =>{
         setCreate((prev) => ({...prev,[e.target.id]:e.target.value}))
    }
   useEffect(() =>{
       if(imagecover.length <1 ) return
       const newImgae = []
       imagecover.forEach( image => newImgae.push(URL.createObjectURL(image)))
       setImageURL(newImgae)
   },[imagecover])

   const onImgae = (e) =>{
      setImages([...e.target.files])
   }
   const handClick = async (e) =>{
        const url ='http://localhost:4001/api/auth/login'
        e.preventDefault()
        const res = await axios.post(url, create+textFile)
        // dispatch({type: "LOGIN_START"})
        // try{
        //      const res = await axios.post(url, creden )
        //      dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        //      if(loading){
        //         <p>Loading....</p>
        //        }
        //        Swal.fire({
        //          icon: 'success',
        //          title: 'ยินดีต้อนรับ',
        //          text: 'ขอบคุณที่ร่วมเป็นสมาชิกของเรา 😍',
        //         })
        //       navigate('/')
        //  }catch(err){
        //     dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
        //        Swal.fire({
        //         icon: 'error',
        //         title: 'ชื่อผู้ใช้ และ รหัสผ่านไม่ถูกต้อง',
        //         text: 'โปรดตรวจสอบอีกครั้ง!',
        //         })
        //      setPopupLogin(false)
        //      navigate('/')
        //  }
        console.log(res)
        }
     console.log(imagecover)
    //  console.log(textFile)
     console.log(create)
  return (
    <div>
<div className="model-navbar"><Navbar/></div>
  <div className="model-body-bg">
      <div className="model-body">
          <div className="model-box-content">
          <div className="m-harder">
              <Link to='/MyCollections' type='button' className="btn-back"><AiFillCaretLeft />ยอนกลับ</Link>
              <h2>สร้างนิยาย</h2>
          </div>
      <div className="model-con-add">
      <form autoComplete='off'>
       <div className="row-row">
         <div className="col4-img">
          <div className="pot-re">
            <div className="cover-img-b">
                <div className="i-c-s">
                   <img className='img-cover' src={cover}/>
               
                
                        {imageURL.map(imageS => 
                              <>
                                <img className='img-cover-co' src={imageS}/>
                                <button onClick={
                                  ()=> setImageURL(imageURL.filter((e => e != imageS)))
                                }>Delete</button>
                              </>
                          )}
               
                  
                  <label className='up-icon d-flex mr-r-l'>
                          <input type="file" accept='image/jpeg'
                              hidden
                              multiple
                              onChange={onImgae} 
                           />
                </label>  
              </div>
            </div>
          </div>
         </div>
          <div className="col5-i-s">
            <div className="row-row">
                <div className='col-md-12'>
                  <strong>ชื่อเรื่อง</strong>
                  <input className='form-control' placeholder="ระบุชื่อเรื่อง" id='titlename' onChange={handleChange}/>
                  {/* <small style="color: red; float: right;">*ต้องระบุ</small> */}
                </div>
            </div>
            <div className="row-row mt-l-r-t">
                <div className='col-md-13'>
                  <strong>ชื่อผู้แต่ง</strong>
                  <input className='form-control'
                    placeholder="ระบุชื่อผู้แต่ง" 
                    id='authorname'
                    onChange={handleChange}
                     />
                </div>
                <div className="col-md-13">
                  <strong>ผู้แปล</strong>
                  <input className="form-control"
                    placeholder="ระบุชื่อผู้แปล" autocomplete="off" 
                    name="translator" id='traname' onChange={handleChange}/>
                </div>
              </div> 
              <div className="row-row mt-l-r-t"> 
                <div className="col-md-4">
                  <strong>หมวดหลัก</strong>
                    <select className="form-control" id='value' onChange={handleChange}>
                        <option value="">เลือกหมวดหลัก</option>
                        <option value="กำลังภายใน">กำลังภายใน</option>
                        <option value="โรแมนติก">โรแมนติก</option>
                    </select>
                    <small style={{color: 'red',float: 'right'}}>*ต้องระบุ</small>
                </div>
                <div className="col-md-4">
                  <strong>หมวดรอง</strong>
                    <select className="form-control" id='value1' onChange={handleChange}>
                      <option value="">เลือกหมวดรอง</option>
                      <option value="กำลังภายใน">กำลังภายใน</option>
                      <option value="โรแมนติก">โรแมนติก</option>
                    </select>
                    <small style={{color:'red',float: 'right'}}>*ต้องระบุ</small>
                </div>
                <div className="col-md-4">
                  <strong>เรตติ้ง</strong>
                    <select className="form-control" id='value2' onChange={handleChange}>
                      <option value="">เลือกเรตติ้ง</option>
                       <option value="18+">18+</option>
                      <option value="20">20</option>
                    </select>
                   <small style={{color: 'red' ,float: 'right'}}>*ต้องระบุ</small>
                </div>
              </div> 
              <div className="row mt-2">
                <div className="col-md-12">
                  <strong>คำโปรย</strong>
                  <textarea className="form-control" 
                  placeholder="ระบุเรื่องย่อ" maxlength="200" 
                  id='textsynopsis'
                  onChange={handleChange}
                  />
                </div>
              </div>
            </div>
        </div>
      </form>
            <div className="sum-e-t">
              <SunEditor onChange={
                (e)=> setTextfile(e)}
               placeholder='เรื่องย่อ'
               
               />
            </div>
          <div className="form-group ">
              <div className="form-check form-check-inline">
                <div className="custom-control custom-radio">
                    <input type="radio" 
                    id="customInlineRadio1" 
                    className="custom-control-input" 
                    name="customInlineRadio" value=""/>
                      <label className="custom-control-label" 
                      for="customInlineRadio1">นิยายแปล
                      </label>
                  </div>
              </div>
              <div className="form-check form-check-inline">
                <div className="custom-control custom-radio">
                    <input type="radio" 
                    id="customInlineRadio1" 
                    className="custom-control-input" 
                    name="customInlineRadio" value=""/>
                      <label className="custom-control-label" 
                      for="customInlineRadio1">นิยาแต่ง
                      </label>
                  </div>
              </div>
            </div>
             <div className="bt-btn mt-b">
                 <div type='button' className="btn-n-s mt-b" onClick={handClick}>บันทึก</div>
             </div>
          </div>
      </div>                      
      </div>
  </div>
</div>
  )
}

export default MycreatN