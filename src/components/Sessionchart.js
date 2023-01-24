import React from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../styles/components/sessionchart.css";

const Sessionchart = ({ data }) => {
  const formatXAxis = (tickItem) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return days[tickItem - 1];
  };

  const CustomTooltipSessionchart = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      return (
        <div className="customtooltip">
          <p className="label">{`${payload[0].value} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="sessionchart">
      <div>
        <h2 className="title">
          Durée moyenne des <br></br>sessions
        </h2>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={360}
          height={125}
          data={data}
          margin={{ top: 0, left: 15, right: 15, bottom: 10 }}
        >
          <XAxis
            dataKey="day"
            stroke="#ffffff"
            tickFormatter={formatXAxis}
            tickLine={false}
            axisLine={false}
            tick={{
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <YAxis hide={true} domain={[0, "dataMax + 30"]} />
          <Tooltip
            content={<CustomTooltipSessionchart />}
            wrapperStyle={{ outline: "none" }}
            cursor={{
              stroke: "#000",
              strokeOpacity: 0.1,
              strokeWidth: 40,
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            unit="min"
            stroke="#ffffff"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Sessionchart;
