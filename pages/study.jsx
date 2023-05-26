import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ReactPlayer from 'react-player';
import Timer from '../components/tools/timer';
import {FaMusic} from 'react-icons/fa';



const PomodoroPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState('lofi');
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const storedMusic = localStorage.getItem('currentMusic');
    if (storedMusic) {
      setCurrentMusic(storedMusic);
    }
  }, []);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const changeMusic = (music) => {
    setCurrentMusic(music);
    localStorage.setItem('currentMusic', music);
  };

  const handleVolumeChange = (event) => {
    const volumeValue = parseFloat(event.target.value);
    setVolume(volumeValue);
  };

  return (
    <div className="w-full pl-[91px] h-min-screen pb-24 overflow-auto text-gray-700 bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Pomodoro Timer</title>
      </Head>
      <div className=" absolute top-0 left-24">
        <Timer />
        {/* ... */}
      </div>
      <div className="absolute top-0 right-0">
        <button
          onClick={() => changeMusic('birds')}
          className={`${
            currentMusic === 'birds' ? 'bg-blue-500' : 'bg-gray-300'
          } px-4 py-2 mx-2 rounded text-white focus:outline-none`}
        >
          Birds
        </button>
        <button
          onClick={() => changeMusic('campfire')}
          className={`${
            currentMusic === 'campfire' ? 'bg-blue-500' : 'bg-gray-300'
          } px-4 py-2 mx-2 rounded text-white focus:outline-none`}
        >
          Campfire
        </button>
        <button
          onClick={() => changeMusic('forest')}
          className={`${
            currentMusic === 'forest' ? 'bg-blue-500' : 'bg-gray-300'
          } px-4 py-2 mx-2 rounded text-white focus:outline-none`}
        >
          Forest
        </button>
        <button
          onClick={() => changeMusic('rain')}
          className={`${
            currentMusic === 'rain' ? 'bg-blue-500' : 'bg-gray-300'
          } px-4 py-2 mx-2 rounded text-white focus:outline-none`}
        >
          Rain
        </button>
        <div className='flex my-6'>
        <FaMusic className="music-icon" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="mx-2"
        /></div>
      </div>
      <div className="gif-container mt-4">
      <ReactPlayer
        url={`music/${currentMusic}.mp3`}
        playing={isPlaying}
        loop={true}
        volume={volume}
        width="100%"
        height="100%"
      />
    </div>
    </div>
  );
};

export default PomodoroPage;
