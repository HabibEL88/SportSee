import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Activity = ({ data }) => {
  const formatXAxis = (tickItem) => {
    const date = new Date(tickItem);
    return date.getDate();
  };
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      return (
        <div
          className="custom-tooltip"
          style={{ color: "white", fontSize: "10px" }}
        >
          <p
            style={{ margin: "10px 10px 20px 10px" }}
            className="label"
          >{`${payload[0].value} kg`}</p>
          <p
            style={{ margin: "10px 10px" }}
            className="label"
          >{`${payload[1].value} Kcal`}</p>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="Activity">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={8}>
          <XAxis
            dataKey="day"
            tickFormatter={formatXAxis}
            tickLine={false}
            tickMargin={15}
            fontSize={20}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={["dataMin - 1", "dataMax +1"]}
            dataKey="kilogram"
            tickMargin={37}
            axisLine={false}
            tickLine={false}
            fontSize={20}
          />
          <YAxis yAxisId="left" dataKey="calories" domain={[0, "auto"]} hide />

          <text
            x={110}
            y={20}
            fill="black"
            textAnchor="middle"
            dominantBaseline="central"
          >
            <tspan fontSize="24">Activité quotidienne</tspan>
          </text>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip
            wrapperStyle={{ backgroundColor: "red", outline: "none" }}
            content={<CustomTooltip />}
          />
          <Legend
            marginBottom={10}
            align="right"
            verticalAlign="top"
            iconType="circle"
            iconSize={10}
            height={95}
          />
          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            name="Poids(kg)"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            name="Calories brûlées (kCal)"
            barSize={10}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activity;
