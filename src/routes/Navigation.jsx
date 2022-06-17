import React from 'react'
import {BrowserRouter, Routes, Route, NavLink, Navigate} from 'react-router-dom'
import {Home} from '../components/Home'
import {About} from '../components/About'

import logo from '../emi.jpg';

function Navigation() {
  return (
      <BrowserRouter>
      <nav>
          <img src={logo} alt="" />
          <ul>
                <li>
                  <NavLink to='/home' className={({isActive})=>isActive ? 'nav-active' : ''}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/about' className={({isActive})=>isActive ? 'nav-active' : ''}>
                    About
                  </NavLink>
                </li>
          </ul>
      </nav>
        <Routes>
            <Route path='home' element={<Home/>} />
            <Route path='/*' element={<Navigate to='/home' replace/> } />
            <Route path='about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    
  )
}

export {Navigation}