import React from 'react'
import {Navbar,SideBar} from '../Nav';
import {SpecialitiesDataTable } from "../components";

function Specialities() {
  return (
    <>
    <SideBar/>
    <div className='dash-body'>
      <Navbar/>
      <div className="p-5">
          
          <SpecialitiesDataTable />
        </div>
    </div>
    </>
  )
}

export default Specialities