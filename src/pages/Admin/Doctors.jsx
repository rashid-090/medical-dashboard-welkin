import React from 'react'
import {Navbar,SideBar} from './Nav';
import {DoctorDataTable } from "./components";

function Doctors() {
  return (
    <>
    <SideBar/>
    <div className='dash-body'>
      <Navbar/>
      <div className="p-5">
          
          {/* <DoctorDataTable /> */}
        </div>
    </div>
    </>
  )
}

export default Doctors