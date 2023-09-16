import axios from 'axios'
import React ,{useState}from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import './login.css'
import './style.scss'
import Register from '../register/Register'

const Loginuser = ({setPopupLogin}) => {
    // const [popregister, setPopregister]= useState(false)
    const [creden, setCreder] = useState({
       username:undefined,
       password:undefined,
    })
    const {user,loading ,err, dispatch} = useContext(AuthContext)
    // const [imageProfile, setImagePath] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) =>{
         setCreder((prev) => ({...prev, [e.target.id]:e.target.value}))
    }
    const handClick = async (e) =>{
        const url ='http://localhost:4000/api/auth/login'
        // const url ='https://node-api-mangatoon.herokuapp.com/api/auth/login'
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try{
             const res = await axios.post(url, creden )
             dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
             if(loading){
                <p>Loading....</p>
               }
               Swal.fire({
                 icon: 'success',
                 title: 'ยินดีต้อนรับ',
                 text: 'ขอบคุณที่ร่วมเป็นสมาชิกของเรา 😍',
                })
              navigate('/')
         }catch(err){
            dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
               Swal.fire({
                icon: 'error',
                title: 'ชื่อผู้ใช้ และ รหัสผ่านไม่ถูกต้อง',
                text: 'โปรดตรวจสอบอีกครั้ง!',
                })
             setPopupLogin(false)
             navigate('/')
         }
        }
        console.log(creden)
  return(
    <>
        <div className='box-l'onClick={setPopupLogin.bind(this,false)}>
              <div className='btn-c' onClick={(e)=> e.stopPropagation()}> 
                  <button className="btn-close close-c" onClick={setPopupLogin.bind(this,false)}>
                    <span className="icon-cross"></span>
                    <span className="visually-hidden">Close</span>
                  </button>
                    <div className='head-h'>
                          <h1>เข้าสู่ระบบ</h1>
                    </div>
                    <div className='log-l'>
                        <table className='font-color-f'>ชื่อผู้ใช้งาน</table>
                        <input className='font-pp' type="email"
                         id="username" 
                         placeholder='ชื่อผู้ใช้งาน'
                         onChange={handleChange}
                         />
                        <table className='font-color-f'>รหัสผ่าน</table>
                        <input className='font-pp' type="password" 
                         id="password" 
                         placeholder='รหัสผ่าน' 
                         onChange={handleChange}
                         />
                    </div>
                      {/* {error && <span>{error.massage}</span>} */}
                    <div className='btn-log '>
                        <button className='btn-l' type="submit" disabled={loading} onClick={handClick}>เข้าสู่ระบบ</button>
                    </div>
                    <div className="foot-p">
                        <Link className='p-font font-color-t'>ลืมรหัสผ่าน</Link>
                    </div>
                    <div className="foot-t">
                        <table className='font-f font-color-f'>ยังไม่เป็นสมาชิกใช่ไหม ? <Link to='/register/user' className='font-f font-color-t foot-f'>สมัครสมาชิก</Link></table>
                    </div>
              </div>
          </div>
            {/* <div className="register-c-t">
                {popregister && <Register setPopregister={setPopregister}/>}
            </div> */}
      </>
)
}

export default Loginuser