"use client";
import { Chart } from "react-google-charts";

export default function WeeklySalesChart() {
  const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];
  return (
    <div className="h-10">
      <Chart chartType="ColumnChart" data={data} />
    </div>
  );
}
