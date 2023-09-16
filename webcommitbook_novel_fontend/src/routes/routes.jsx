import React from 'react'
import Home from '../pages/Home'
import { Route , Routes } from 'react-router-dom'
const routes = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
    </Routes>
  )
}

export default routes