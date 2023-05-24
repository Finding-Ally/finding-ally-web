import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ReactPlayer from 'react-player';
import Timer from '../components/tools/timer';

const PomodoroPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState('lofi');

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

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Pomodoro Timer</title>
      </Head>
      <div className="timer-container">
        <Timer />
        {/* ... */}
      </div>
      <div className="music-container mt-4">
        <button
          onClick={() => changeMusic('lofi')}
          className={`${
            currentMusic === 'lofi' ? 'bg-blue-500' : 'bg-gray-300'
          } px-4 py-2 mx-2 rounded text-white focus:outline-none`}
        >
          Lo-fi
        </button>
        <button
          onClick={() => changeMusic('chillhop')}
          className={`${
            currentMusic === 'chillhop' ? 'bg-blue-500' : 'bg-gray-300'
          } px-4 py-2 mx-2 rounded text-white focus:outline-none`}
        >
          Chillhop
        </button>
        <button
          onClick={() => changeMusic('jazz')}
          className={`${
            currentMusic === 'jazz' ? 'bg-blue-500' : 'bg-gray-300'
          } px-4 py-2 mx-2 rounded text-white focus:outline-none`}
        >
          Jazz
        </button>
      </div>
      <div className="gif-container mt-4">
        <ReactPlayer
          url={`path_to_${currentMusic}_music.mp3`}
          playing={isPlaying}
          loop={true}
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default PomodoroPage;
