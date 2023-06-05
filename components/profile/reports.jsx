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
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgb(75, 192, 192,0.5)",
                borderWidth: 2
            }
            ]
        },
    });
}, [])


  return (
    <>
    <div className="w-full h-screen rounded-2xl backdrop-blur-md bg-white/50 p-4">
    <h1 className="w-[300px] mx-auto my-10 text-xl font-semibold capitalize ">Hours Spent On Platform</h1>
            <div className="w-[1000px] h-fit flex mx-auto my-auto">
                <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                    <canvas id='myChart'></canvas>
                </div>
            </div>

    </div>
   
    
    </>
  );
}
