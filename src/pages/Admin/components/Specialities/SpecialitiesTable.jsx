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
    },
  ];
  return (
    <>
      <div className="bg-white xs:p-3 md:p-5 rounded-radiusmd">
        <div className="pb-2 flex justify-between items-center px-3">
          <h1 className="text-xl font-medium">Specialities</h1>
          <Link
            to="/admin/specialities"
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
                <TableRow key={i}>
                  <TableCell className="table-cells">{row.name}</TableCell>
                  <TableCell className="table-cells" align="right">
                    <span
                      className={`specialities-active cursor-pointer ${row.status}`}
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
}

export default SpecialitiesTable;
