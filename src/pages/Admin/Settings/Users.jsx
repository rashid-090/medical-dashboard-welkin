import React from 'react';
import {Navbar,SideBar} from '../Nav';

function Users() {
  return (
    <>
    <SideBar />
    <div className='dash-body'>
      <Navbar/>
      <h1 className="">User</h1>
    </div>
  </>
  )
}

export default Users