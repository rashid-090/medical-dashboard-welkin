import {Link} from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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
          {rows?.slice(0,5).map((row) => (
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
    </>
  )
}

export default AppointmentTable