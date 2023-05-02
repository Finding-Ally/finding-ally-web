
export default function Calendar(){
  
    return (
    <>
    
    <div className="container pb-8">
    <div className="wrapper bg-gray-100 rounded shadow w-full ">
      <div className="header flex p-2 mb-4">
        <span className="text-sm font-bold text-black   border border-gray-600 p-1 rounded cursor-pointer">
          2023 March
        </span>
        <div class="flex items-center mx-4">
            <input defaultChecked id="meetings-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="meetings-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">Filter 1</label>
        </div>
        <div class="flex items-center mr-4">
            <input id="tasks-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="tasks-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">Filter 2</label>
        </div>
        <div class="flex items-center mr-4">
            <input id="dates-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="dates-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">Filter 3</label>
        </div>
        {/* <div class="flex items-center mr-4">
            <input id="events-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label for="events-checkbox" class="ml-2 text-sm font-medium text-gray-900 ">Events</label>
        </div> */}
       
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-2 border-x border-t h-10  lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="xl:block lg:block md:block sm:block hidden text-black ">Sunday</span>
              <span className="xl:hidden lg:hidden md:hidden sm:hidden block text-black ">Sun</span>
            </th>
            <th className="p-2 border-r border-t h-10  lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="xl:block lg:block md:block sm:block hidden text-black ">Monday</span>
              <span className="xl:hidden lg:hidden md:hidden sm:hidden block text-black ">Mon</span>
            </th>
            <th className="p-2 border-r border-t h-10  lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="xl:block lg:block md:block sm:block hidden text-black ">Tuesday</span>
              <span className="xl:hidden lg:hidden md:hidden sm:hidden block text-black ">Tue</span>
            </th>
            <th className="p-2 border-r border-t h-10  lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="xl:block lg:block md:block sm:block hidden text-black ">Wednesday</span>
              <span className="xl:hidden lg:hidden md:hidden sm:hidden block text-black ">Wed</span>
            </th>
            <th className="p-2 border-r  border-t h-10  lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="xl:block lg:block md:block sm:block hidden text-black ">Thursday</span>
              <span className="xl:hidden lg:hidden md:hidden sm:hidden block text-black ">Thu</span>
            </th>
            <th className="p-2 border-r border-t h-10  lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="xl:block lg:block md:block sm:block hidden text-black ">Friday</span>
              <span className="xl:hidden lg:hidden md:hidden sm:hidden block text-black ">Fri</span>
            </th>
            <th className="p-2 border-r border-t h-10  lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span className="xl:block lg:block md:block sm:block hidden text-black ">Saturday</span>
              <span className="xl:hidden lg:hidden md:hidden sm:hidden block text-black ">Sat</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center h-20">
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300">
              <div className="flex flex-col h-32  lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">1</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                  <div
                    className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span className="event-name">
                      Meeting
                    </span>
                    <span className="time">
                      12:00~14:00
                    </span>
                  </div>
                  <div
                    className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span className="event-name">
                      Meeting
                    </span>
                    <span className="time">
                      18:00~20:00
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">2</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">3</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">4</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">6</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">7</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                  <div
                    className="event bg-blue-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span className="event-name">
                      Shopping
                    </span>
                    <span className="time">
                      12:00~14:00
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">8</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>

          <tr className="text-center h-20">
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">9</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">10</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">12</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">13</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">14</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">15</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">16</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>
          
          <tr className="text-center h-20">
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">16</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">17</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">18</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">19</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                <div
                    className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span className="event-name">
                      Meeting
                    </span>
                    <span className="time">
                      18:00~20:00
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">20</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">21</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">22</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>
          
          <tr className="text-center h-20">
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">23</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">24</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">25</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">26</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">27</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">28</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">29</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>
          
          <tr className="text-center h-20">
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">30</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">31</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border bg-gray-100  p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
                <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                  <div className="top h-5 w-full">
                    <span className="text-gray-500 dark:text-gray-400">1</span>
                  </div>
                  <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                </div>
              </td>
            <td className="border bg-gray-100  p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">2</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border bg-gray-100  p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">3</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border bg-gray-100  p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400">4</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td className="border bg-gray-100  p-1 h-32  lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto  cursor-pointer ease hover:bg-gray-300 ">
              <div className="flex flex-col h-32 mx-auto  lg:w-30 md:w-30 sm:w-full w-10 overflow-hidden">
                <div className="top h-5 w-full">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">5</span>
                </div>
                <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  </div>
    </>
    );
}