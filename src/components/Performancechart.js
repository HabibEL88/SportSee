import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "../styles/components/Performancechart.css";

const Performancechart = ({ data }) => {
  const getKindValue = (kindData) => {
    return data.kind[kindData.kind];
  };

  return (
    <div className="chart-performance">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey={getKindValue}
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 12 }}
            tickCount={1}
          />
          <PolarRadiusAxis tick={false} tickCount={5} axisLine={false} />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
export default Performancechart;
