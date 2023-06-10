import React, { useEffect, useState } from 'react';

export default function Calendar() {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  // Get the total number of days in the current month
  const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Calculate the number of weeks in the current month
  const totalWeeksInMonth = Math.ceil(totalDaysInMonth / 7);

  // Create an array to store the event data for each day
  const [eventData, setEventData] = useState([]);

  useEffect(() => {
    // Create demo event data for each date of the current month
    const demoEventData = Array(totalDaysInMonth)
      .fill()
      .map((_, dayIndex) => {
        const date = new Date(currentYear, currentMonth, dayIndex + 1);
        const event = {
          name: `Event ${dayIndex + 1}`,
          time: `${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`,
        };
        return [event];
      });

    // Update the eventData state with the demo event data
    setEventData(demoEventData);
  }, [currentYear, currentMonth, totalDaysInMonth]);

  return (
    <>
      <div className="container pb-8">
        <div className="wrapper bg-gray-100 rounded shadow w-full ">
          <div className="header flex p-2 mb-4">
            <span className="text-sm font-bold text-black   border border-gray-600 p-1 rounded cursor-pointer">
              {monthNames[currentMonth]} {currentYear}
            </span>
          </div>
          <table className="w-full">
            <thead>
              {/* Table header */}
            </thead>
            <tbody>
              {Array(totalWeeksInMonth)
                .fill()
                .map((_, weekIndex) => (
                  <tr key={weekIndex} className="text-center h-20">
                    {Array(7)
                      .fill()
                      .map((_, dayIndex) => {
                        const dayOfMonth = weekIndex * 7 + dayIndex + 1;

                        // Create a new Date object for the current day
                        const date = new Date(currentYear, currentMonth, dayOfMonth);

                        return (
                          <td
                            key={dayIndex}
                            className="border p-1 h-32 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto cursor-pointer ease hover:bg-gray-300"
                          >
                            <div className="flex flex-col h-32 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                              <div className="top h-5 w-full">
                                <span className="text-gray-500 dark:text-gray-400">
                                  {date.getDate()}
                                </span>
                              </div>
                              <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                                {eventData[dayOfMonth - 1].map((event, eventIndex) => (
                                  <div
                                    key={eventIndex}
                                    className="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                                  >
                                    <span className="event-name">{event.name}</span>
                                    <span className="time">{event.time}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </td>
                        );
                      })}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
