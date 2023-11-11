import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Register } from '../pages/auth/Register'
import { LoginPage } from '../pages/auth/LoginPage'
import { DashboardPage } from '../pages/auth/DashboardPage'
import { Redux } from '../pages/auth/reduxhandle/Redux'
import { Rspv } from '../pages/Rspv'



export const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Rspv/>}></Route>
    <Route path='/' element={<Redux/>}></Route>
    <Route path='/login' element={<LoginPage></LoginPage>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/dash' element={<DashboardPage/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
