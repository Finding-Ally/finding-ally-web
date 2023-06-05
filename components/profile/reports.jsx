import Script from "next/script";
import { useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function Reports() {

  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            datasets: [
            {
                data: [40, 100, 44, 70, 63, 30, 10],
                label: "Hours / Day",
                backgroundColor: ['rgb(255, 99, 132)','rgb(0, 255, 0)','rgb(255, 99, 132)','rgb(128, 255, 0)','rgb(0, 255, 255)','rgb(255, 255, 0)','rgb(255, 255, 128)'],
            // borderColor: 'rgb(255, 99, 132)',

                borderWidth: 2
            }
            ]
        },
    });
}, [])


  return (
    <>
    <div className="w-full rounded-2xl p-4">
    <h1 className="w-full mx-auto mb-10 text-xl font-semibold capitalize ">Hours Spent On Platform</h1>
            <div className="w-[1000px] h-fit flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>

    </div>
   
    
    </>
  );
}
