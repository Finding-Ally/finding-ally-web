import Script from "next/script";
import { useEffect } from "react";


export default function Reports() {

  
  return (
    <>
    <div className="w-full h-screen rounded-2xl backdrop-blur-md bg-white/50 p-4">
    <div className="bg-gray-800 text-gray-500 rounded shadow-xl py-5 px-5 w-full sm:w-2/3 md:w-1/2 lg:w-1/3" x-data="{cardOpen:false,cardData:cardData()}" x-init="$watch('cardOpen', value => value?(cardData.countUp($refs.total,0,11602,null,0.8),cardData.sessions.forEach((el,i) => cardData.countUp($refs[`device${i}`],0,cardData.sessions[i].size,null,1.6))):null);setTimeout(()=>{cardOpen=true},100)">
        <div className="flex w-full">
            <h3 className="text-lg font-semibold leading-tight flex-1">TOTAL SESSIONS</h3>
            <div className="relative h-5 leading-none">
                <button className="text-xl text-gray-500 hover:text-gray-300 h-6 focus:outline-none">
                    <i className="mdi mdi-chevron-'+(cardOpen?'up':'down')" ></i>
                </button>
            </div>
        </div>
        <div className="relative overflow-hidden transition-all duration-500" x-ref="card" x-bindstyle="`max-height:${cardOpen?$refs.card.scrollHeight:0}px; opacity:${cardOpen?1:0}`">
            <div>
                <div className="pb-4 lg:pb-6">
                    <h4 className="text-2xl lg:text-3xl text-white font-semibold leading-tight inline-block" x-ref="total">0</h4>
                </div>
                <div className="pb-4 lg:pb-6">
                    <div className="overflow-hidden rounded-full h-3 bg-gray-800 flex transition-all duration-500 cardOpen?'w-full':'w-0'">
                        <template x-for="(item,index) in cardData.sessions">
                            <div className="h-full" ></div>
                        </template>
                    </div>
                </div>
                <div className="flex -mx-4">
                    <template x-for="(item,index) in cardData.sessions">
                        <div className="w-1/3 px-4">
                            <div className="text-sm">
                                <span className="inline-block w-2 h-2 rounded-full mr-1 align-middle">&nbsp;</span>
                                <span className="align-middle" x-text="item.label">&nbsp;</span>
                            </div>
                            <div className="font-medium text-lg text-white">
                                <span>0</span>%
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
</div>
    <div className="rounded shadow-xl overflow-hidden w-full md:flex" style={{maxWidth:"900px"}} x-data="{stockTicker:stockTicker()}" x-init="stockTicker.renderChart()">
        <div className="flex w-full md:w-1/2 px-5 pb-4 pt-8 bg-indigo-500 text-white items-center">
            <canvas id="chart" className="w-full"></canvas>
        </div>
        <div className="flex w-full md:w-1/2 p-10 bg-gray-100 text-gray-600 items-center">
            <div className="w-full">
                <h3 className="text-lg font-semibold leading-tight text-gray-800" x-text="stockTicker.stockFullName"></h3>
                <h6 className="text-sm leading-tight mb-2"><span x-text="stockTicker.stockShortName"></span>&nbsp;&nbsp;-&nbsp;&nbsp;Aug 2nd 4:00pm AEST</h6>
                <div className="flex w-full items-end mb-6">
                    <span className="block leading-none text-3xl text-gray-800" x-text="stockTicker.price.current.toFixed(3)">0</span>
                    <span className="block leading-5 text-sm ml-4 text-green-500" x-text="`${stockTicker.price.high-stockTicker.price.low<0?'▼':'▲'} ${(stockTicker.price.high-stockTicker.price.low).toFixed(3)} (${(((stockTicker.price.high/stockTicker.price.low)*100)-100).toFixed(3)}%)`"></span>
                </div>
                <div className="flex w-full text-xs">
                    <div className="flex w-5/12">
                        <div className="flex-1 pr-3 text-left font-semibold">Open</div>
                        <div className="flex-1 px-3 text-right" x-text="stockTicker.price.open.toFixed(3)">0</div>
                    </div>
                    <div className="flex w-7/12">
                        <div className="flex-1 px-3 text-left font-semibold">Market Cap</div>
                        <div className="flex-1 pl-3 text-right" x-text="stockTicker.price.cap.m_formatter()">0</div>
                    </div>
                </div>
                <div className="flex w-full text-xs">
                    <div className="flex w-5/12">
                        <div className="flex-1 pr-3 text-left font-semibold">High</div>
                        <div className="px-3 text-right" x-text="stockTicker.price.high.toFixed(3)">0</div>
                    </div>
                    <div className="flex w-7/12">
                        <div className="flex-1 px-3 text-left font-semibold">P/E ratio</div>
                        <div className="pl-3 text-right" x-text="stockTicker.price.ratio.toFixed(2)">0</div>
                    </div>
                </div>
                <div className="flex w-full text-xs">
                    <div className="flex w-5/12">
                        <div className="flex-1 pr-3 text-left font-semibold">Low</div>
                        <div className="px-3 text-right" x-text="stockTicker.price.low.toFixed(3)">0</div>
                    </div>
                    <div className="flex w-7/12">
                        <div className="flex-1 px-3 text-left font-semibold">Dividend yield</div>
                        <div className="pl-3 text-right" x-text="`${stockTicker.price.dividend}%`">0%</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <Script id="my-script">
      {`
      Number.prototype.m_formatter = function() {
        return this > 999999 ? (this / 1000000).toFixed(1) + 'M' : this
    };
    let stockTicker = function(){
        return {
            stockFullName: 'SW Limited.',
            stockShortName: 'ASX:SFW',
            price: {
                current: 2.320,
                open: 2.230,
                low: 2.215,
                high: 2.325,
                cap: 93765011,
                ratio: 20.10,
                dividend: 1.67
            },
            chartData: {
                labels: ['10:00','','','','12:00','','','','2:00','','','','4:00'],
                data: [2.23,2.215,2.22,2.25,2.245,2.27,2.28,2.29,2.3,2.29,2.325,2.325,2.32],
            },
            renderChart: function(){
                let c = false;
    
                Chart.helpers.each(Chart.instances, function(instance) {
                    if (instance.chart.canvas.id == 'chart') {
                        c = instance;
                    }
                });
    
                if(c) {
                    c.destroy();
                }
    
                let ctx = document.getElementById('chart').getContext('2d');
    
                let chart = new Chart(ctx, {
                    type: "line",
                    data: {
                        labels: this.chartData.labels,
                        datasets: [
                            {
                                label: '',
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                borderColor: "rgba(255, 255, 255, 1)",
                                pointBackgroundColor: "rgba(255, 255, 255, 1)",
                                data: this.chartData.data,
                            },
                        ],
                    },
                    layout: {
                        padding: {
                            right: 10
                        }
                    },
                    options: {
                        legend: {
                            display: false,
                        },
                        scales: {
                            yAxes: [{
                                ticks: {
                                    fontColor: "rgba(255, 255, 255, 1)",
                                },
                                gridLines: {
                                    display: false,
                                },
                            }],
                            xAxes: [{
                                ticks: {
                                    fontColor: "rgba(255, 255, 255, 1)",
                                },
                                gridLines: {
                                    color: "rgba(255, 255, 255, .2)",
                                    borderDash: [5, 5],
                                    zeroLineColor: "rgba(255, 255, 255, .2)",
                                    zeroLineBorderDash: [5, 5]
                                },
                            }]
                        }
                    }
                });
            }
        }
    }
    `}
    </Script>
    </>
  );
}
