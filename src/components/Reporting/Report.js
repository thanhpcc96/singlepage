import React, { Component } from "react";

import {
  AreaChart,
  stop,
  linearGradient,
  defs,
  XAxis,
  Tooltip,
  Area,
  BarChart,
  Bar,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 }
];
const data1 = [
  { name: "Tháng 7", Da: 4000, female: 2400, male: 2400 },
  { name: "Tháng 8", uv: 3000, female: 1398, male: 2210 },
  { name: "Tháng 9", uv: 2000, female: 9800, male: 2290 },
  { name: "Tháng 10", uv: 2780, female: 3908, male: 2000 },
  { name: "Tháng 11", uv: 1890, female: 4800, male: 2181 },
  { name: "Tháng 12", uv: 2390, female: 3800, male: 2500 },
  { name: "Tháng 6", uv: 3490, female: 4300, male: 2100 }
];
const Report = () => (
  <section className="content">
    <div className="wraper container-fluid">
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
      <BarChart
        width={600}
        height={300}
        data={data1}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="female" stackId="a" fill="#8884d8" />
        <Bar dataKey="male" stackId="a" fill="#82ca9d" />
        <Bar dataKey="uv" fill="#ffc658" />
      </BarChart>
    </div>
  </section>
);
export default Report;
