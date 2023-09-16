import React from 'react'
import Header from '../components/header/Header'
import Buttonbar from '../components/buttunbar/Buttonbar'
import Rightbar from '../components/rightbar/Rghtbar'
import './home.css'
const Home = () => {
  return (
    <div>
      <div className="header-top"><Header/></div> 
      <div className="container">
            hhh
      </div>
      <div className="rightbar-r">
          <Rightbar/>
      </div>
       <div className="footer">
          <Buttonbar/>
        </div>
    </div>
  )
}

export default Home