import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { BiSearchAlt, BiFilter } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useState } from "react";


let columns = [
  { field: "title", width: 500},
  {
    field: "status",
    width: 500,
    renderCell: (params) => {
      return (
        <div className={`cellStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

let rows = [
  {
    id: "01",
    title: "Speciality 01",
    status: "Active",
  },
  {
    id: "02",
    title: "Speciality 02",
    status: "Active",
  },
  {
    id: "03",
    title: "Speciality 02",
    status: "Active",
  },
  {
    id: "04",
    title: "Speciality 04",
    status: "Active",
  },
  {
    id: "05",
    title: "Speciality 05",
    status: "Active",
  },
  {
    id: "06",
    title: "Speciality 06",
    status: "Active",
  },
  {
    id: "07",
    title: "Speciality 07",
    status: "Active",
  },
  {
    id: "08",
    title: "Speciality 08",
    status: "Active",
  },
  
];





function SpecialitiesTable() {
  const [data, setData] = useState(rows)
  const handleDelete = (id) =>{
    setData(data.filter((item)=> item.id !== id))
  }

  const actionColumn = [


    {
      field: "action", 
      width: 100,
      renderCell:(params)=>{
        return(
          <div>

              <div onClick={() => handleDelete(params.row.id)} className="viewButton cursor-pointer text-base hover:text-primary"><RiDeleteBinLine/></div>

          </div>
        )
      }
    }
  ]
  return (
    <>
      <div className="bg-white rounded-radiusmd p-3 py-8">
      <h1 className="text-2xl font-medium">Specialities</h1>
        <div className="pb-2 flex xs:flex-col md:flex-row gap-y-2 gap-x-3 justify-end items-center">
            <Link to='/admin/specialities-new'><button className="bg-primary hover:bg-primaryhover text-white h-10 w-32 rounded-radiusmd">Create New</button></Link>
            <span className="relative">
                  <BiSearchAlt className="absolute text-gray-500 top-2 left-2 text-2xl" />
                  <input
                    className="outline-none pl-8 pr-2 xs:h-8 md:h-10 rounded-radiusmd border border-gray-300"
                    type="search"
                    placeholder="Search"
                  />
                </span>
        </div>

        {/*  */}
        <div className="h-full pt-3 ">
          <DataGrid
          slots={{
            columnHeaders: () => null,
          }}
            rows={rows}
            columns={columns.concat(actionColumn)}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
          />
        </div>
        {/*  */}
      </div>
    </>
  )
}

export default SpecialitiesTable