import React from "react";
import { Navbar, SideBar } from "./Nav";
import { AppointmentTableAll } from "./components";


function Appointments() {
  return (
    <>
      <SideBar />
      <div className="dash-body">
        <Navbar />
        <div className="p-5">
          
          <AppointmentTableAll />
        </div>
      </div>
    </>
  );
}

export default Appointments;
