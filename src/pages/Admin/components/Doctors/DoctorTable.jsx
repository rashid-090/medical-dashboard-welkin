import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Profile } from "../../../../assets";

function DoctorTable() {
  const rows = [
    {
      img: Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img: Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img: Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img: Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img: Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img: Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img: Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img: Profile,
      name: "John",
      department: "Cardiology",
    },
  ];
  return (
    <>
      <div className="bg-white xs:p-3 md:p-5 rounded-radiusmd">
        <div className="pb-2 flex justify-between items-center px-3">
          <h1 className="text-xl font-medium">Doctors</h1>
          <Link
            to="/admin/doctors"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            View More
          </Link>
        </div>
        <TableContainer className="main-table">
          <Table
            sx={{
              [`& .${tableCellClasses.root}`]: {
                border: "none",
              },
            }}
          >
            <TableBody>
              {rows?.slice(0, 5).map((row, i) => (
                <TableRow key={i} className="relative">
                  <TableCell className="table-cells">
                    <img
                      className="h-9 absolute top-2  object-cover"
                      src={row.img}
                      alt="img"
                    />
                  </TableCell>
                  <TableCell className="table-cells" align="left">{row.name}</TableCell>
                  <TableCell className="table-cells" align="right">
                    {row.department}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default DoctorTable;
