import React from 'react'
import {MdKeyboardBackspace} from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, SideBar } from "../../Admin/Nav";

function AppointmentView() {
  return (
    <>
    <SideBar />
      <div className="dash-body">
        <Navbar />
        <div className="p-5">
          <div className='bg-white rounded-radiusmd p-10 py-5'>
            
            <span className='flex justify-between items-center'>
              <h1 className='text-2xl font-medium'>Appointment</h1>
              <div>
                <select className='outline-none border rounded-radiusmd py-1 px-2 text-base'>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                  <option value="Not Reachable">Not Reachable</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </span>
            
     
              <div className='flex flex-col gap-4 pt-5 text-base'>
                  <div className='flex flex-col gap-0'>
                    <label className='text-gray-500'>Patient Name</label>
                    <input className='w-full border-0 border-b border-gray-300 h-8 outline-none p-2 pl-0' type="text" value='John' />
                  </div>
                  <div className='flex flex-col gap-0'>
                    <label className='text-gray-500'>Contact number</label>
                    <input className='w-full border-0 border-b border-gray-300 h-8 outline-none p-2 pl-0' type="text" value='+918888882255'/>
                  </div>
                  <div className='flex flex-col gap-0'>
                    <label className='text-gray-500'>Email ID</label>
                    <input className='w-full border-0 border-b border-gray-300 h-8 outline-none p-2 pl-0' type="text" value='john@gmail.com' />
                  </div>
                  <div className='flex flex-col gap-0'>
                    <label className='text-gray-500'>Department</label>
                    <input className='w-full border-0 border-b border-gray-300 h-8 outline-none p-2 pl-0' type="text" value='Cardiololy' />
                  </div>
                  <div className='flex flex-col gap-0'>
                    <label className='text-gray-500'>Doctor</label>
                    <input className='w-full border-0 border-b border-gray-300 h-8 outline-none p-2 pl-0' type="text" value='Dr. Aswin R' />
                  </div>
                  <div className='flex flex-col gap-0'>
                    <label className='text-gray-500'>Date</label>
                    <input className='w-full border-0 border-b border-gray-300 h-8 outline-none p-2 pl-0' type="text" value='23 May 2023, 10:10 Am' />
                  </div>
                  <div className='flex flex-col gap-0'>
                    <label className='text-gray-500'>Message</label>
                    <input className='w-full border-0 border-b border-gray-300 h-8 outline-none p-2 pl-0' type="text" value='Lipsum lorem' />
                  </div>

                  <div className='pt-2'>
                    <NavLink to='/admin/appointments'><span className='bg-primary hover:bg-primaryhover duration-150 text-white border rounded-radiusbtn px-10 py-1.5 flex items-center w-fit'>Back</span></NavLink>
                  </div>
              </div>
 

          </div>
        </div>
      </div>
    </>
  )
}

export default AppointmentView