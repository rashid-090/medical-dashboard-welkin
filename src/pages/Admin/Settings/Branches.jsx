import React from 'react';
import {Navbar,SideBar} from '../Nav';

function Branches() {
  return (
    <>
    <SideBar />
    <div className='dash-body'>
      <Navbar/>
      <h1 className="">Branches</h1>
    </div>
  </>
  )
}

export default Branches