import React from 'react';
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Profile} from '../../../assets'

function SpecialitiesTable() {
    const rows = [
        {
          name: "John",
          status: "Active",
        },
        {
          name: "John",
          status: "Inactive",
        },
        {
          name: "John",
          status: "Active",
        },
        {
          name: "John",
          status: "Active",
        },
        {
          name: "John",
          status: "Active",
        },
        {
          name: "John",
          status: "Active",
        },
        {
          name: "John",
          status: "Active",
        },
        {
          name: "John",
          status: "Active",
        }]
  return (
    <>
    <div>
   
        <TableContainer component={Paper}>
          <Table className="bg-gray-100 border-2 border-gray-200">
            <TableBody>
              {rows?.slice(0,5).map((row,i) => (
                <TableRow key={i}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right"><span className={`specialities-active cursor-pointer ${row.status}`}>{row.status}</span></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default SpecialitiesTable