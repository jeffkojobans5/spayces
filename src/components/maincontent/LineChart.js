import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// STEP 1 - Include Dependencies
// Include react

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    numdivlines: "10",
    showvalues: "0",
    legenditemfontsize: "15",
    legenditemfontbold: "1",
    plottooltext: "<b>$dataValue</b> Total Paid in $label",
    theme: "fusion",
  },
  categories: [
    {
      category: [
        {
          label: "Jan",
        },
        {
          label: "Feb",
        },
        {
          label: "Mar",
        },
        {
          label: "Apr",
        },
        {
          label: "May",
        },
        {
          label: "Jun",
        },
        {
          label: "Jul",
        },
        {
          label: "Aug",
        },
        {
          label: "Sep",
        },
        {
          label: "Oct",
        },
        {
          label: "Nov",
        },
        {
          label: "Dec",
        },
      ],
    },
  ],
  dataset: [
    {
      // seriesname: "Resolved",
      data: [
        {
          value: "500",
        },
        {
          value: "400",
        },
        {
          value: "600",
        },
        {
          value: "900",
        },
        {
          value: "700",
        },
        {
          value: "600",
        },
        {
          value: "800",
        },
        {
          value: "1000",
        },
        {
          value: "800",
        },
        {
          value: "1000",
        },
        {
          value: "1100",
        },
        {
          value: "1200",
        },
      ],
    },
  ],
};

class LineChart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="msspline"
        width="100%"
        height="500"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default LineChart;
