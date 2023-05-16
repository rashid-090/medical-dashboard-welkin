import {Link} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BiSearchAlt, BiFilter } from "react-icons/bi";



const AppointmentTable = () => {
  const rows = [
    {
        id: '01',
        name:"John",
        department:"Cardiology",
        doctorname:'Dr R Rahul',
        date: 'May 01 / 10:00 AM',
        status:'Pending'
    },
    {
        id: '02',
        name:"John",
        department:"Cardiology",
        doctorname:'Dr R Rahul',
        date: 'May 05 / 10:00 AM',
        status:'Completed'
    },
    {
        id: '03',
        name:"John",
        department:"Cardiology",
        doctorname:'Dr R Rahul',
        date: 'May 10 / 10:00 AM',
        status:'Pending'
    },
    {
        id: '04',
        name:"John",
        department:"Cardiology",
        doctorname:'Dr R Rahul',
        date: 'June 01 / 10:00 AM',
        status:'Completed'
    },
    {
        id: '05',
        name:"John",
        department:"Cardiology",
        doctorname:'Dr R Rahul',
        date: 'June 10 / 10:00 AM',
        status:'Completed'
    },
    {
        id: '05',
        name:"John",
        department:"Cardiology",
        doctorname:'Dr R Rahul',
        date: 'June 10 / 10:00 AM',
        status:'Completed'
    },
    {
        id: '05',
        name:"John",
        department:"Cardiology",
        doctorname:'Dr R Rahul',
        date: 'June 10 / 10:00 AM',
        status:'Completed'
    },
    {
        id: '05',
        name:"John",
        department:"Cardiology",
        doctorname:'Dr R Rahul',
        date: 'June 10 / 10:00 AM',
        status:'Completed'
    },
  ]
  return (
    <>
    <div>
    <div className="pb-2 flex justify-between">
            <h1 className="text-xl font-medium">Appointments</h1>
            <div className="flex gap-5">
              <span className="relative">
                <BiSearchAlt className="absolute text-gray-500 top-2 left-1 text-2xl" />
                <input
                  className="outline-none pl-10 pr-2 h-10"
                  type="search"
                  placeholder="Search"
                />
              </span>
              <span className="relative">
                <BiFilter className="absolute text-gray-500 top-2 left-1 text-2xl" />
                <input
                  className="outline-none pl-10 pr-2 h-10"
                  type="search"
                  placeholder="Filter"
                />
              </span>
            </div>
          </div>
   
     <TableContainer component={Paper} >
      <Table className='bg-gray-100 border-2 border-gray-200'>
        {/* <TableHead>
          <TableRow>
            <TableCell className=''>ID</TableCell>
            <TableCell className=''>Name</TableCell>
            <TableCell className=''>Department</TableCell>
            <TableCell className=''>Doctor</TableCell>
            <TableCell className=''>Date</TableCell>
            <TableCell className=''>Time</TableCell>
            <TableCell className=''>Status</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell>
                {row.id}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.department}</TableCell>
              <TableCell>{row.doctorname}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell><span className={`appoint-status cursor-pointer ${row.status}`}>{row.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  )
}

export default AppointmentTable