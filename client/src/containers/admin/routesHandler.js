import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminDashboard from './adminDashboard'

const RoutesHandler = () => {
  return (
    <div>
        <Routes>
            <Route path='/adminDashboard' element={<AdminDashboard />}></Route>
        </Routes>
    </div>
  )
}

export default RoutesHandler