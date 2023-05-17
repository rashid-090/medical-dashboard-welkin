import React, { useState } from "react";
import { Navbar, SideBar } from "../Nav";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
    "Branch 01",
    "Branch 02",
    "Branch 03",
    "Branch 04",
    "Branch 05",
    "Branch 06",
    "Branch 07",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function CreateSpecialities() {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <>
      <SideBar />
      <div className="dash-body">
        <Navbar />
        <div className="p-5 flex flex-col gap-4 pt-5 text-base">
          <div className="bg-white xs:p-3 md:p-5 py-8 rounded-radiusmd">
            <h1 className="text-2xl font-medium">New Speciality</h1>
            {/*  */}
              <form>
            <div className="pt-5 flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">Speciality title</label>
                  <input
                    className="w-full border rounded-radiusbtn border-gray-300 h-12 outline-none p-2"
                    type="text"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">About Speciality</label>
                  <ReactQuill
                    className="ql-editors"
                    theme="snow"
                    value={value}
                    onChange={setValue}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">Branch</label>
                  <FormControl>
                    <Select
                      className=" h-12"
                      labelId="demo-multiple-chip-label"
                      id="demo-multiple-chip"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      renderValue={(selected) => (
                        <Box
                          sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                        >
                          {selected.map((value) => (
                            <Chip key={value} label={value} />
                          ))}
                        </Box>
                      )}
                      MenuProps={MenuProps}
                    >
                      {names.map((name) => (
                        <MenuItem
                          key={name}
                          value={name}
                          style={getStyles(name, personName, theme)}
                        >
                          {name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-gray-500">Video URL</label>
                  <input
                    className="w-full border rounded-radiusbtn border-gray-300 h-12 outline-none p-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label className="text-gray-500">Upload Brochure</label>
                  <form
                  className="rounded-radiusmd flex justify-center items-center flex-col border-2 border-dashed border-gray-300 w-80 h-40 ">
                    <input
                        className="image"
                        type="file"
                        accept="image/*"
                    />
                  </form>
                </div>
            </div>
              </form>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateSpecialities;
