import React from 'react';
import {Navbar,SideBar} from '../Nav';

function Home() {
  return (
    <>
    <SideBar />
    <div className='dash-body'>
      <Navbar/>
      <h1 className="">Home</h1>
    </div>
  </>
  )
}

export default Home