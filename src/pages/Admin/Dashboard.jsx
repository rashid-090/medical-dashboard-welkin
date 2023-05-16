import React, { useState } from "react";
import {Link} from 'react-router-dom'
import { Navbar, SideBar } from "./Nav";
import { ChartDraw, AppointmentTable,DoctorTable,SpecialitiesTable } from "./components";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <SideBar />
      <section className="dash-body">
        <Navbar />
        <div className="p-5 flex flex-col gap-5">
          {/* Chart */}
          <h1 className="text-xl font-medium">Dashboard</h1>
          <div className="graph border-2 border-gray-400">
          {!loading ? 
            <ChartDraw /> 
            :
            <div className="flex justify-center items-center h-40">
              <h1>No Data Found</h1>
            </div>
          }
          </div>
          {/* Appointment */}
          {!loading ? 
          <div >
            
                <div className='pb-2 flex justify-between items-center'>
                <h1 className="text-lg font-medium">Appointments</h1>
                <Link to='/admin/appointments' className='text-sm text-gray-500 hover:text-gray-700'>View More</Link>
                </div>
       
            <AppointmentTable /> 
        

          </div>
          : 
          <div className="flex justify-center items-center h-40 border-2 border-gray-400">
          <h1>No Appointments Found</h1>
        </div>
        }

          {/* Doctor / Speialities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {!loading ?
            <div>
              <div>
              <div className="pb-2 flex justify-between items-center">
                <h1 className="text-lg font-medium">Doctors</h1>
                <Link
                  to="/admin/doctors"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  View More
                </Link>
              </div>
              <DoctorTable/>
              </div>
            </div>
            :
            <div className="flex justify-center items-center h-40 border-2 border-gray-400">
              <h1>No Doctors Found</h1>
            </div>
          }

        {!loading ?
            <div >
                  <div className="pb-2 flex justify-between items-center">
                <h1 className="text-lg font-medium">Specialities</h1>
                <Link
                  to="/admin/specialities"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  View More
                </Link>
              </div>
              <SpecialitiesTable/>
            </div>
            :
            <div className="flex justify-center items-center h-40 border-2 border-gray-400">
              <h1>No Specialities Found</h1>
            </div>
        }
          
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
