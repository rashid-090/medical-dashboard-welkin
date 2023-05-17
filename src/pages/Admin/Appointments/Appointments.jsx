import React from "react";
import { Navbar, SideBar } from "../../Admin/Nav";
import { AppointmentDataTable } from "../components";


function Appointments() {
  return (
    <>
      <SideBar />
      <div className="dash-body">
        <Navbar />
        <div className="p-5">
          
          <AppointmentDataTable />
        </div>
      </div>
    </>
  );
}

export default Appointments;
