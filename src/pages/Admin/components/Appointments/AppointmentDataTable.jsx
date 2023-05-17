import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { BiSearchAlt, BiFilter } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";


const columns = [
  { field: "id", headerName: "ID", width: 160 },
  { field: "name", headerName: "Name", width: 160 },
  { field: "department", headerName: "Department", width: 160 },
  { field: "doctorname", headerName: "Doctorname", width: 160 },
  { field: "date", headerName: "Date", width: 160 },
  {
    field: "status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      return (
        <div className={`cellStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

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
    id: "06",
    name: "John",
    department: "Cardiology",
    doctorname: "Dr R Rahul",
    date: "June 10 / 10:00 AM",
    status: "Completed",
  },
  {
    id: "07",
    name: "John",
    department: "Cardiology",
    doctorname: "Dr R Rahul",
    date: "June 10 / 10:00 AM",
    status: "Completed",
  },
  {
    id: "08",
    name: "John",
    department: "Cardiology",
    doctorname: "Dr R Rahul",
    date: "June 10 / 10:00 AM",
    status: "Completed",
  },
  {
    id: "09",
    name: "John",
    department: "Cardiology",
    doctorname: "Dr R Rahul",
    date: "June 10 / 10:00 AM",
    status: "Completed",
  },
];


const actionColumn = [
  {
    field: "action", 
    headerName: "Action",
    width: 150,
    renderCell:()=>{
      return(
        <div>
          <Link to='/admin/appointment-edit/:id'>
            <div className="viewButton cursor-pointer text-base hover:text-primary"><AiOutlineEye/></div>
          </Link>
        </div>
      )
    }
  }
]

const AppointmentTable = () => {
  return (
    <>
      <div className="bg-white xs:p-3 md:p-5 py-8 rounded-radiusmd">
        <div className="pb-2 flex xs:flex-col md:flex-row gap-y-2 justify-between">
          <h1 className="text-2xl font-medium">Appointments</h1>
          <div className="flex xs:justify-end gap-5">
            <span className="relative">
              <BiSearchAlt className="absolute text-gray-500 top-2 left-2 text-2xl" />
              <input
                className="outline-none pl-8 pr-2 xs:h-8 md:h-10 rounded-radiusmd border border-gray-300"
                type="search"
                placeholder="Search"
              />
            </span>
          </div>
        </div>

        {/*  */}
        <div className="h-full bg-white rounded-lg ">
          <DataGrid
            rows={rows}
            columns={columns.concat(actionColumn)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 8 },
              },
            }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
          />
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default AppointmentTable;
