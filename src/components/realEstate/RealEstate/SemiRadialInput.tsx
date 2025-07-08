import React from "react";
import ReactApexChart from "react-apexcharts";

type SemiRadialInputProps = {
  value: number;
  min: number;
  max: number;
};

const SemiRadialInput: React.FC<SemiRadialInputProps> = ({
  value,
  min,
  max,
}) => {
  const percent = ((value - min) / (max - min)) * 100;

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "radialBar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: { size: "75%" },
        track: {
          background: "#f2f4f7",
          strokeWidth: "100%",
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "16px",
            fontWeight: 600,
            formatter: () => "token",
          },
        },
      },
    },
    stroke: {
      lineCap: "round",
    },

    fill: {
      colors: ["#111"],
    },
  };

  return (
    <div className="relative   flex flex-col items-center">
      <ReactApexChart
        options={options}
        series={[percent]}
        type="radialBar"
        height={260}
      />
    </div>
  );
};

export default SemiRadialInput;
