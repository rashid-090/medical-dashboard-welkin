import React from 'react';
import {Navbar,SideBar} from './Nav';

function Gallery() {
  return (
    <>
    <SideBar/>
    <div className='dash-body'>
      <Navbar/>
      <h1>Gallery</h1>
    </div>
    </>
  )
}

export default Gallery