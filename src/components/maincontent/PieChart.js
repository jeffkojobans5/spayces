import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    // showpercentvalues: "1",
    // defaultcenterlabel: "Android Distribution",
    aligncaptionwithcanvas: "0",
    captionpadding: "0",
    decimals: "1",
    plottooltext: "<b>$percentValue</b> of Order activity are <b>$label</b>",
    centerlabel: "# Order Activity: $value",
    theme: "fusion",
  },
  data: [
    {
      label: "New",
      value: "300",
    },
    {
      label: "Disptached",
      value: "400",
    },
    {
      label: "Processing",
      value: "800",
    },
    {
      label: "Completed",
      value: "2000",
    },
  ],
};

class PieChart extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="doughnut2d"
        width="100%"
        height="500"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default PieChart;
