import React from 'react'
import {Navbar,SideBar} from './Nav';
import {DoctorTableAll } from "./components";

function Doctors() {
  return (
    <>
    <SideBar/>
    <div className='dash-body'>
      <Navbar/>
      <div className="p-5">
          
          <DoctorTableAll />
        </div>
    </div>
    </>
  )
}

export default Doctors