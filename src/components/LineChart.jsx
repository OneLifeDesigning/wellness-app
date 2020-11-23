import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = (props) => {
  const [state, setState] = useState({
    series: [
      {
        name: "Const",
        data: props.data,
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Period cost",
        align: "center",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: props.date,
        title: {
          text: "Date",
        },
      },
      yaxis: {
        title: {
          text: "Cost",
        },
        min: 0,
        max: 2,
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
    },
  });

  setTimeout(() => {
    state && setState(state);
  }, 1800);

  return (
    <div className="d-flex justify-content-center radial-chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={230}
      />
    </div>
  );
};

export default LineChart;
