import React from 'react'
import {Navbar,SideBar} from './Nav';
import {SpecialitiesTableAll } from "./components";

function Specialities() {
  return (
    <>
    <SideBar/>
    <div className='dash-body'>
      <Navbar/>
      <div className="p-5">
          
          <SpecialitiesTableAll />
        </div>
    </div>
    </>
  )
}

export default Specialities