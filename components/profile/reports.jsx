import Script from "next/script";
import { useEffect } from "react";

import PieChart from "../graphs/piechart";
import LineChart from "../graphs/linechart";
import BarChart from "../graphs/barchart";
import Doughnut from "../graphs/doughnut";
import Radar from "../graphs/radar";
import FilledLineChart from "../graphs/fillledlinechart";
import BubbleChart from "../graphs/bubblechart";
import StackedBar from "../graphs/stackedbar";

export default function Reports() {

  
  return (
    <>
    <div className="w-full h-screen rounded-2xl backdrop-blur-md bg-white/50 p-4">
   
        {/* <LineChart /> */}
        {/* <BarChart /> */}
        {/* <PieChart /> */}
        {/* <Doughnut /> */}
        {/* <Radar /> */}
        <FilledLineChart />
        {/* <BubbleChart /> */}
        {/* <StackedBar /> */}

    </div>
   
    
    </>
  );
}
