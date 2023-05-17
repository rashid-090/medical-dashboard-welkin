import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, SideBar } from "./Nav";
import {
  ChartDraw,
  AppointmentTable,
  DoctorTable,
  SpecialitiesTable,
} from "./components";

function Dashboard() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <SideBar />
      <section className="dash-body">
        <Navbar />
        <div className="p-5 flex flex-col gap-5">
          {/* Chart */}
          {!loading ? (
            <div>
              <div className="pb-2 flex justify-between items-center bg-white xs:p-3 md:p-5 ">
                <h1 className="text-2xl font-medium">Dashboard</h1>
              </div>

              <ChartDraw />
            </div>
          ) : (
            
            <div className="bg-white p-5 rounded-radiusmd">
              <h1 className="text-2xl font-medium">Dashboard</h1>
              <div className="flex justify-center items-center h-40  bg-white rounded-radiusmd">
              <h1>No Data Found</h1>
            </div>
            </div>
          )}
          {/* Appointment */}
          {!loading ? (
            <div>
              <AppointmentTable />
            </div>
          ) : (
            <div className="bg-white p-5 rounded-radiusmd">
              <h1 className="text-xl font-medium">Appointment</h1>
              <div className="flex justify-center items-center h-40  bg-white rounded-radiusmd">
              <h1>No Appointment Found</h1>
            </div>
            </div>
          )}

          {/* Doctor / Speialities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {!loading ? (
              <div>
                 <DoctorTable />
                
              </div>
            ) : (
              <div className="bg-white p-5 rounded-radiusmd">
              <h1 className="text-xl font-medium">Doctors</h1>
              <div className="flex justify-center items-center h-40  bg-white rounded-radiusmd">
              <h1>No Doctors Found</h1>
            </div>
            </div>
            )}

            {!loading ? (
              <div>
                <SpecialitiesTable />
              </div>
            ) : (
              <div className="bg-white p-5 rounded-radiusmd">
              <h1 className="text-xl font-medium">Specialities</h1>
              <div className="flex justify-center items-center h-40  bg-white rounded-radiusmd">
              <h1>No Specialities Found</h1>
            </div>
            </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
