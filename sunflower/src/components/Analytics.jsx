
import React from 'react';
import { FaEye, FaBookmark, FaHeart, FaChartLine } from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Analytics = () => {
  const stats = [
    { label: "Total views", value: "128.4K", growth: "+12.3%", icon: <FaEye size={14}/> },
    { label: "Saves", value: "24.8K", growth: "+8.1%", icon: <FaBookmark size={14}/> },
    { label: "Likes", value: "9.2K", growth: "+15.7%", icon: <FaHeart size={14}/> },
    { label: "Engagement", value: "73%", growth: "+4.2%", icon: <FaChartLine size={14}/> },
  ];

  const data = [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 700 },
    { name: "Mar", value: 600 },
    { name: "Apr", value: 900 },
    { name: "May", value: 1200 },
    { name: "Jun", value: 1000 },
  ];

  return (
    <section id="dashboard" className="max-w-7xl mx-auto px-8 py-24 transition-colors duration-300">
      {/* Main Container: White in light mode, Dark Gray in dark mode */}
      <div className="bg-gray-50 dark:bg-[#080808] rounded-[2.5rem] p-8 border border-gray-200 dark:border-white/5 shadow-2xl">

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((s, i) => (
            <div key={i} className="bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 rounded-2xl p-6 shadow-sm dark:shadow-none">
              <div className="flex justify-between text-gray-400 dark:text-gray-500 mb-4">
                <span className="text-[13px] font-medium">{s.label}</span>
                {s.icon}
              </div>
              <div className="text-3xl font-bold mb-1 text-black dark:text-white">{s.value}</div>
              <div className="text-[11px] text-green-600 dark:text-green-500 font-semibold">{s.growth}</div>
            </div>
          ))}
        </div>

        {/* Chart Container */}
        <div className="h-72 bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 rounded-2xl p-4 shadow-sm dark:shadow-none">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              {/* Stroke colors for axes change based on theme (handled via CSS variables or standard hex) */}
              <XAxis 
                dataKey="name" 
                stroke="#888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <YAxis 
                stroke="#888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#111', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              {/* Sunflower Brand Orange */}
              <Line
                type="monotone"
                dataKey="value"
                stroke="#f48120"
                strokeWidth={3}
                dot={{ fill: '#f48120', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
    </section>
  );
};
