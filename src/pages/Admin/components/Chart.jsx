import React from 'react';
import './style.scss'
import { AreaChart,LineChart,Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'May', uv: 1000 },
    { name: 'June', uv: 2000 },
    { name: 'July', uv: 1000 },
    { name: 'Agust', uv: 3000  },
    { name: 'September', uv: 1890 },
    { name: 'October', uv: 2390 },
    { name: 'November', uv: 1490 },
  ];


function Chart() {
  return (
   <>
  <div className='h-60 z-[0]'>
  <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 0,
          }}
        >
      
          <XAxis dataKey="name" />
          {/* <YAxis /> */}
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#3287ff6e" />
        </LineChart>
      </ResponsiveContainer>
  </div>
   </>
  )
}

export default Chart