import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import HostelMenu from '../HostelMenu'
import Pricesharing from '../Pricesharing'

const Approuter = () => {
  return (
     <Routes>
        <Route path="/" element={<Home/>}></Route>
         <Route path="/menu" element={<HostelMenu/>}></Route>
             <Route path="/sharing" element={<Pricesharing/>}></Route>
     </Routes>
  )
}

export default Approuter