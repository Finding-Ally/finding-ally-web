import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [targetTime, setTargetTime] = useState(25 * 60); // Default target time is 25 minutes
  const [breakTime, setBreakTime] = useState(5 * 60); // Default break time is 5 minutes
  const [currentTime, setCurrentTime] = useState(targetTime);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    setCurrentTime(targetTime);
  }, [targetTime]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setCurrentTime(targetTime);
    setIsBreak(false);
  };

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setCurrentTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (currentTime === 0) {
      // Timer has reached zero, handle break or reset
      setIsRunning(false);
      setIsBreak((prevIsBreak) => !prevIsBreak);
      if (isBreak) {
        setCurrentTime(targetTime);
      } else {
        setCurrentTime(breakTime);
      }

    //   startTimer();
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, currentTime, isBreak, targetTime, breakTime]);

  const getTimerPercentage = () => {
    return (currentTime / (isBreak ? breakTime : targetTime)) * 100;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-48 h-48">
        <div className="absolute w-full h-full rounded-full bg-gray-300"></div>
        <div
          className="absolute w-full h-full rounded-full"
          style={{
            background: `conic-gradient(blue 0% ${getTimerPercentage()}%, transparent 0% 100%)`,
            transform: `rotate(${90 - (getTimerPercentage() / 100) * 360}deg)`,
            border: '4px solid blue',
          }}
        ></div>
        <div className="absolute flex items-center justify-center w-full h-full">
          <h1 className="text-4xl font-bold">{formatTime(currentTime)}</h1>
        </div>
      </div>
      <div className="flex space-x-4 mt-4">
        <button
          className="px-4 py-2 rounded bg-blue-500 text-white focus:outline-none"
          onClick={isRunning ? pauseTimer : startTimer}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          className="px-4 py-2 rounded bg-red-500 text-white focus:outline-none"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      <div className="flex items-center justify-center mt-4">
        <div className="flex space-x-4">
          <div>
            <label htmlFor="targetTime" className="text-lg font-bold">
              Target Time (minutes):
            </label>
            <input
              id="targetTime"
              type="number"
              className="border rounded px-2 py-1 focus:outline-none"
              value={targetTime / 60}
              onChange={(e) => setTargetTime(parseInt(e.target.value) * 60)}
            />
          </div>
          <div>
            <label htmlFor="breakTime" className="text-lg font-bold">
              Break Time (minutes):
            </label>
            <input
              id="breakTime"
              type="number"
              className="border rounded px-2 py-1 focus:outline-none"
              value={breakTime / 60}
              onChange={(e) => setBreakTime(parseInt(e.target.value) * 60)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
