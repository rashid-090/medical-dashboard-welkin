import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Profile} from '../../../assets'

function DoctorTable() {
  const rows = [
    {
      img:Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img:Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img:Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img:Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img:Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img:Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img:Profile,
      name: "John",
      department: "Cardiology",
    },
    {
      img:Profile,
      name: "John",
      department: "Cardiology",
    },
  ];
  return (
    <>
      <div>
        
        <TableContainer component={Paper}>
          <Table className="bg-gray-100 border-2 border-gray-200">
            <TableBody>
              {rows?.slice(0,5).map((row,i) => (
                <TableRow key={i} className='relative'>
                  <TableCell><img className="h-9 absolute top-2  object-cover" src={row.img} alt="img" /></TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right">{row.department}</TableCell>
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
