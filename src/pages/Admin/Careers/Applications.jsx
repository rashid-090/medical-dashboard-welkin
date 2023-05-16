import React from 'react';
import {Navbar,SideBar} from '../Nav';

function Applications() {
  return (
    <>
      <SideBar />
      <div className='dash-body'>
        <Navbar/>
        <h1 className="">Applications</h1>
      </div>
    </>
  )
}

export default Applications