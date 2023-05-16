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
import { BiSearchAlt, BiFilter } from "react-icons/bi";
import {FiMoreVertical } from "react-icons/fi";

function SpecialitiesTable() {
    const rows = [
        {
          name: "John",
          status: "Active",
          more:<FiMoreVertical/>
        },
        {
          name: "John",
          status: "Inactive",
          more:<FiMoreVertical/>
        },
        {
          name: "John",
          status: "Active",
          more:<FiMoreVertical/>
        },
        {
          name: "John",
          status: "Active",
          more:<FiMoreVertical/>
        },
        {
          name: "John",
          status: "Active",
          more:<FiMoreVertical/>
        },
        {
          name: "John",
          status: "Active",
          more:<FiMoreVertical/>
        },
        {
          name: "John",
          status: "Active",
          more:<FiMoreVertical/>
        },
        {
          name: "John",
          status: "Active",
          more:<FiMoreVertical/>
        }]
  return (
    <>
    <div>
    <div className="pb-2 flex justify-between">
            <h1 className="text-xl font-medium">Specialities</h1>
            <div className="flex gap-5 items-center">
              <span>
                <button className="bg-primary h-10 text-white w-40 rounded-md capitalize">Create New</button>
              </span>
              <span className="relative">
                <BiSearchAlt className="absolute text-gray-500 top-2 left-1 text-2xl" />
                <input
                  className="outline-none pl-10 pr-2 h-10"
                  type="search"
                  placeholder="Search"
                />
              </span>
            </div>
          </div>
        <TableContainer component={Paper}>
          <Table className="bg-gray-100 border-2 border-gray-200">
            <TableBody>
              {rows.map((row,i) => (
                <TableRow key={i} className='relative'>
                  <TableCell>{row.name}</TableCell>
                  <TableCell align="right"><span className={`specialities-active cursor-pointer ${row.status}`}>{row.status}</span></TableCell>
                  <TableCell align="right" ><span className="cursor-pointer text-xl absolute right-20 top-4">{row.more}</span></TableCell>
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