import React, { useRef, useEffect } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { DegreesByProgram, DegreesByYear, DegreesByYearAndUni } from "../../../store/slice/degreeSlice";
import { useSelector } from "react-redux";

const Chart01: React.FC = (): JSX.Element => {
  const chartRef = useRef<HTMLDivElement>(null);
  const degreesByYear = useSelector(DegreesByYear);
  const degreesByProgram = useSelector(DegreesByProgram);
  const degreesByYearAndUni = useSelector(DegreesByYearAndUni);

  // console.log(degreesByYear)
  console.log("degreesByProgram: "+ degreesByProgram)
  console.log("degreesByYearAndUni: "+ degreesByYearAndUni)
  //console.log("degreesByProgram: "+ degreesByProgram[0].count)

  function searchYearCount(year: { toString: () => string; }) {
    for (let i = 0; i < degreesByYear.length; i++) {
      if (degreesByYear[i]._id === year.toString()) {
        return degreesByYear[i].count;
      }
    }
    return 0;
  }
  
  // console.log("Check 2023: "+searchYearCount(2024))
  // const byYear(){
    // degreesByYear
  // }

  const chartOneOptions = {
    series: [
      {
        name: "Students",
        data: [searchYearCount(2012), searchYearCount(2013), searchYearCount(2014), searchYearCount(2015), searchYearCount(2016), searchYearCount(2017), searchYearCount(2018), searchYearCount(2019), searchYearCount(2020), searchYearCount(2021), searchYearCount(2022), searchYearCount(2023)],
      },
      // {
      //   name: "Product Two",
      //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      // },

    ],
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    // colors: ["#3C50E0", "#80CAEE"],
        colors: ["#3C50E0"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 335,
      type: "area",
      dropShadow: {
        enabled: true,
        color: "#623CEA14",
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: 2,
      curve: "straight",
    },
    markers: {
      size: 4,
      colors: "#fff",
      strokeColors: ["#3056D3", "#80CAEE"],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    labels: {
      show: false,
      position: "top",
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022","2023",],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
      min: 0,
      max: 100,
    },
  };

  // useEffect(() => {
  //   const chartSelector = chartRef.current;
  //   if (chartSelector) {
  //     const chartOne = new ApexCharts(chartSelector, chartOneOptions);
  //     chartOne.render();
  //   }
  // }, [chartRef, chartOneOptions]);

  useEffect(() => {
    let chartOne: ApexCharts;

    const renderChart = () => {
      const chartSelector = chartRef.current;
      if (chartSelector) {
        chartOne = new ApexCharts(chartSelector, chartOneOptions);
        chartOne.render();
      }
    };

    const destroyChart = () => {
      if (chartOne) {
        chartOne.destroy();
      }
    };

    renderChart();

    return () => {
      destroyChart();
    };
  }, [chartRef, chartOneOptions]);
  
  return (
    <div ref={chartRef} id="chartOne">
      {/* chart will be rendered here */}
    </div>
  );
};

export default Chart01;

// import React, { Component } from 'react';
// import ApexCharts from "apexcharts";


// interface Props {
//   id: string;
// }

// class Chart01 extends Component<Props> {
//   private chartRef: any;
//   private chartOneOptions = {
//     series: [
//       {
//         name: "Product One",
//         data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
//       },
//       {
//         name: "Product Two",
//         data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
//       },
//     ],
//     legend: {
//       show: false,
//       position: "top",
//       horizontalAlign: "left",
//     },
//     colors: ["#3C50E0", "#80CAEE"],
//     chart: {
//       fontFamily: "Satoshi, sans-serif",
//       height: 335,
//       type: "area",
//       dropShadow: {
//         enabled: true,
//         color: "#623CEA14",
//         top: 10,
//         blur: 4,
//         left: 0,
//         opacity: 0.1,
//       },
//       toolbar: {
//         show: false,
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 1024,
//         options: {
//           chart: {
//             height: 300,
//           },
//         },
//       },
//       {
//         breakpoint: 1366,
//         options: {
//           chart: {
//             height: 350,
//           },
//         },
//       },
//     ],
//     stroke: {
//       width: 2,
//       curve: "straight",
//     },
//     markers: {
//       size: 4,
//       colors: "#fff",
//       strokeColors: ["#3056D3", "#80CAEE"],
//       strokeWidth: 3,
//       strokeOpacity: 0.9,
//       strokeDashArray: 0,
//       fillOpacity: 1,
//       discrete: [],
//       hover: {
//         size: undefined,
//         sizeOffset: 5,
//       },
//     },
//     labels: {
//       show: false,
//       position: "top",
//     },
//     grid: {
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       yaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     xaxis: {
//       type: "category",
//       categories: [
//         "2012","2013",        "2014",        "2015",        "2016",        "2017",        "2018",        "2019",        "2020",        "2021",        "2022",        "2023",      ],
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     yaxis: {
//       title: {
//         style: {
//           fontSize: "0px",
//         },
//       },
//       min: 0,
//       max: 100,
//     },
//   };



//   componentDidMount() {
//     const chartSelector = document.querySelector(`#${this.props.id}`);
//     if (chartSelector) {
//       const chartOne = new ApexCharts(
//         chartSelector,
//         this.chartOneOptions
//       );
//       chartOne.render();
//       this.chartRef = chartOne;
//     }
//   }

//   componentWillUnmount() {
//     this.chartRef && this.chartRef.destroy();
//   }

//   render() {
//     return (
//       <div id="chartOne">
//         {/* chart will be rendered here */}
//       </div>
//     );
//   }
// }

// export default Chart01;
// import React from 'react';
// import ApexCharts from 'apexcharts';
// // interface Props {
// //   id: string;
// // }
// interface ChartOneProps {}

// interface ChartOneState {}

// class ChartOne extends React.Component<ChartOneProps, ChartOneState> {
//   private chartRef = React.createRef<HTMLDivElement>();
  
//   private chartOneOptions = {
//     series: [
//       {
//         name: "Product One",
//         data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
//       },
//       {
//         name: "Product Two",
//         data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
//       },
//     ],
//     legend: {
//       show: false,
//       position: "top",
//       horizontalAlign: "left",
//     },
//     colors: ["#3C50E0", "#80CAEE"],
//     chart: {
//       fontFamily: "Satoshi, sans-serif",
//       height: 335,
//       type: "area",
//       dropShadow: {
//         enabled: true,
//         color: "#623CEA14",
//         top: 10,
//         blur: 4,
//         left: 0,
//         opacity: 0.1,
//       },
//       toolbar: {
//         show: false,
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 1024,
//         options: {
//           chart: {
//             height: 300,
//           },
//         },
//       },
//       {
//         breakpoint: 1366,
//         options: {
//           chart: {
//             height: 350,
//           },
//         },
//       },
//     ],
//     stroke: {
//       width: 2,
//       curve: "straight",
//     },
//     markers: {
//       size: 4,
//       colors: "#fff",
//       strokeColors: ["#3056D3", "#80CAEE"],
//       strokeWidth: 3,
//       strokeOpacity: 0.9,
//       strokeDashArray: 0,
//       fillOpacity: 1,
//       discrete: [],
//       hover: {
//         size: undefined,
//         sizeOffset: 5,
//       },
//     },
//     labels: {
//       show: false,
//       position: "top",
//     },
//     grid: {
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       yaxis: {
//         lines: {
//           show: true,
//         },
//       },
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     xaxis: {
//       type: "category",
//       categories: [
//         "2012","2013",        "2014",        "2015",        "2016",        "2017",        "2018",        "2019",        "2020",        "2021",        "2022",        "2023",      ],
//       axisBorder: {
//         show: false,
//       },
//       axisTicks: {
//         show: false,
//       },
//     },
//     yaxis: {
//       title: {
//         style: {
//           fontSize: "0px",
//         },
//       },
//       min: 0,
//       max: 100,
//     },
//   };

//   componentDidMount() {
//     const chartSelector = this.chartRef.current;
//     if (chartSelector) {
//       const chartOne = new ApexCharts(chartSelector, this.chartOneOptions);
//       chartOne.render();
//     }
       
//   }
  

//   render() {
//     return <div ref={this.chartRef} id="chartOne"></div>;
//   }
// }

// export default ChartOne;