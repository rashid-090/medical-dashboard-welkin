import React from 'react';
import {Navbar,SideBar} from '../Nav';

function General() {
  return (
    <>
    <SideBar />
    <div className='dash-body'>
      <Navbar/>
      <h1 className="">General</h1>
    </div>
  </>
  )
}

export default General