import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const AppointmentTable = () => {
  const rows = [
    {
      id: "01",
      name: "John",
      department: "Cardiology",
      doctorname: "Dr R Rahul",
      date: "May 01 / 10:00 AM",
      status: "Pending",
    },
    {
      id: "02",
      name: "John",
      department: "Cardiology",
      doctorname: "Dr R Rahul",
      date: "May 05 / 10:00 AM",
      status: "Completed",
    },
    {
      id: "03",
      name: "John",
      department: "Cardiology",
      doctorname: "Dr R Rahul",
      date: "May 10 / 10:00 AM",
      status: "Pending",
    },
    {
      id: "04",
      name: "John",
      department: "Cardiology",
      doctorname: "Dr R Rahul",
      date: "June 01 / 10:00 AM",
      status: "Completed",
    },
    {
      id: "05",
      name: "John",
      department: "Cardiology",
      doctorname: "Dr R Rahul",
      date: "June 10 / 10:00 AM",
      status: "Completed",
    },
    {
      id: "05",
      name: "John",
      department: "Cardiology",
      doctorname: "Dr R Rahul",
      date: "June 10 / 10:00 AM",
      status: "Completed",
    },
    {
      id: "05",
      name: "John",
      department: "Cardiology",
      doctorname: "Dr R Rahul",
      date: "June 10 / 10:00 AM",
      status: "Completed",
    },
    {
      id: "05",
      name: "John",
      department: "Cardiology",
      doctorname: "Dr R Rahul",
      date: "June 10 / 10:00 AM",
      status: "Completed",
    },
  ];
  return (
    <>
      <div className="bg-white xs:p-3 md:p-5 rounded-radiusmd">
        <div className="pb-2 flex justify-between items-center px-3">
          <h1 className="text-xl font-medium">Appointments</h1>
          <Link
            to="/admin/appointments"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            View More
          </Link>
        </div>
        <TableContainer>
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                border: "none",
              },
            }}
          >
            <TableBody>
              {rows?.slice(0, 5).map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="table-cells" align="left">{row.id}</TableCell>
                  <TableCell className="table-cells" align="center">{row.name}</TableCell>
                  <TableCell className="table-cells" align="center">
                    {row.department}
                  </TableCell>
                  <TableCell className="table-cells" align="center">
                    {row.doctorname}
                  </TableCell>
                  <TableCell className="table-cells" align="center">{row.date}</TableCell>
                  <TableCell className="table-cells" align="right">
                    <span
                      className={`appoint-status cursor-pointer ${row.status}`}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default AppointmentTable;
