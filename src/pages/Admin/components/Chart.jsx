import React from 'react';
import './style.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'May',pv:1000, uv: 1000 },
    { name: 'June',pv:3000, uv: 2000 },
    { name: 'July',pv:1000, uv: 1000 },
    { name: 'Agust',pv:2000, uv: 3000  },
    { name: 'September',pv:4000, uv: 1890 },
    { name: 'October',pv:1000, uv: 2390 },
    { name: 'November',pv:2000, uv: 1490 },
  ];


function Chart() {
  return (
   <>
   
  <div className='h-96 z-[0] bg-white rounded-md'>
  <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
   
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d"  />
        </LineChart>
      </ResponsiveContainer>
  </div>
   </>
  )
}

export default Chart