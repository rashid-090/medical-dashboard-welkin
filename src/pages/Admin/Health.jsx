import React from 'react';
import {Navbar,SideBar} from './Nav';

function HealthCheckUp() {
  return (
    <>
    <SideBar/>
    <div className='dash-body'>
      <Navbar/>
      <h1>HealthCheckUp</h1>
    </div>
    </>
  )
}

export default HealthCheckUp