import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
// import userImage from "../../../assets/images/Daivd.png";
type SemiRadialInputProps = {
  value: number;
  label: string;
  min: number;
  max: number;
};

const SemiRadialInput: React.FC<SemiRadialInputProps> = ({
  value,
  label,
  min,
  max,
}) => {
  const percent = ((value - min) / (max - min)) * 100;

  // Initial state setup
  const [state, setState] = useState<{
    series: number[];
    options: ApexCharts.ApexOptions;
  }>({
    series: [percent],
    options: {
      chart: {
        type: "radialBar",
        sparkline: { enabled: true },
      },
      labels: [label],
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          hollow: {
            // margin: 15,
            size: "75%",
            // image: userImage,
            // imageWidth: 64,
            // imageHeight: 64,
            // imageClipped: false,
          },
          track: {
            background: "#f2f4f7",
            strokeWidth: "100%",
          },
          dataLabels: {
            name: {
              show: true,
            },
            value: {
              fontSize: "16px",
              fontWeight: 600,
              formatter: () => "Token",
            },
          },
        },
      },
      stroke: {
        lineCap: "round",
      },
      fill: {
        colors: ["black"],
      },
    },
  });

  // If value/props change, update series (reactive!)
  useEffect(() => {
    setState((prev) => ({
      ...prev,
      series: [percent],
    }));
  }, [value, min, max, percent]);

  return (
    <div className="relative flex flex-col items-center">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={260}
      />
    </div>
  );
};

export default SemiRadialInput;
