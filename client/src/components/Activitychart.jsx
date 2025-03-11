import React from 'react'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

const data = [
    { name: "Mon", value: 100 }, { name: "Tue", value: 200 }, { name: "Wed", value: 150 }, { name: "Thu", value: 250 }, { name: "Fri", value: 300 }, { name: "Sat", value: 220 }, { name: "Sun", value: 180 },
];

const Activitychart = () => {
    return (
        <div class="flex justify-center">
            <div class="flex flex-col justify-between w-4/5 rounded-2xl m-2 bg-white shadow-md p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">My Activity</h2>
                    <p className="text-sm text-gray-400 cursor-pointer">Last Week ▼</p>
                </div>

                {/* Chart */}
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="name" tick={{ fill: "#999" }} />
                        <YAxis tick={{ fill: "#999" }} />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "#4f46e5",
                                color: "#fff",
                                borderRadius: "8px",
                            }}
                            itemStyle={{ color: "#fff" }}
                            labelStyle={{ color: "#fff" }}
                            cursor={{ stroke: "#4f46e5" }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#4f46e5"
                            strokeWidth={3}
                            dot={{ r: 5 }}
                            activeDot={{
                                r: 10,
                                strokeWidth: 2,
                                stroke: "#4f46e5",
                                fill: "#fff",
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>

    )
}

export default Activitychart
