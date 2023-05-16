import React from 'react'
import {Navbar,SideBar} from './Nav';

function NewsUpdates() {
  return (
    <>
    <SideBar/>
    <div className='dash-body'>
      <Navbar/>
      <h1>NewsUpdates</h1>
    </div>
    </>
  )
}

export default NewsUpdates