import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import ReactPlayer from 'react-player';
import Timer from '../components/tools/timer';
import {FaMusic} from 'react-icons/fa';
import AudioPlayer from '../components/tools/AudioPlayer';
import tracks from '../components/tools/tracks';



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

  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(`https://type.fit/api/quotes`);
        if (!response.ok) {
          throw new Error("Failed to fetch quotes");
        }
        const jsonData = await response.json();
        
        let randomQuote = null;
        do {
          const randomIndex = Math.floor(Math.random() * jsonData.length);
          randomQuote = jsonData[randomIndex];
        } while (randomQuote && randomQuote.text.split(' ').length > 12);
  
        if (randomQuote) {
          setQuote(randomQuote);
        } else {
          console.error("No quotes found with less than 12 words.");
        }
      } catch (error) {
        console.error("An error occurred while fetching quotes:", error);
      }
    };
  
    fetchQuotes();
  }, []);
  
  


  return (
    <div className="w-full pl-[91px] h-min-screen overflow-auto text-gray-700 bg-gradient-to-r from-indigo-300 from-10% via-sky-300 via-30% to-emerald-300 to-90% h-screen flex flex-col items-center justify-center">
      {/* <ReactPlayer url={'./video.mp4'} className="h-screen absolute w-full" controls={true} autoplay muted loop/> */}
      <Head>
        <title>Selft Study</title>
      </Head>
      <video controls={false} autoPlay={true} muted={true} loop={true} className='h-screen z-30 fixed object-cover w-screen' >         
          <source src="./train.mp4" type="video/mp4"/>       
      </video>

      
      <div className="z-40 absolute top-5 left-28">
        <Timer />
        {/* ... */}
      </div>

      <div className="z-50 absolute top-5 left-5 translate-x-2/3">
        <h1 className='text-black font-bold text-xl'>&quot;{quote?.text}&quot; - {quote?.author || "Anonymous"}</h1>
      
      </div>
      <div className="z-40 absolute top-5 right-5">
        {/* <AudioPlayer tracks={tracks} /> */}
        <div className='backdrop-blur-md bg-black/80 rounded-2xl p-4'>
        <button
          onClick={() => changeMusic('birds')}
          className={`${
            currentMusic === 'birds' ? 'bg-blue-600' : 'bg-gray-700'
          } px-2 py-2 mx-2 rounded text-white focus:outline-none`}
        >
          Birds
        </button>
        <button
          onClick={() => changeMusic('campfire')}
          className={`${
            currentMusic === 'campfire' ? 'bg-blue-600' : 'bg-gray-700'
          } px-2 py-2 mx-2 rounded text-white focus:outline-none`}
        >
          Campfire
        </button>
        <button
          onClick={() => changeMusic('forest')}
          className={`${
            currentMusic === 'forest' ? 'bg-blue-600' : 'bg-gray-700'
          } px-2 py-2 mx-2 rounded text-white focus:outline-none`}
        >
          Forest
        </button>
        <button
          onClick={() => changeMusic('rain')}
          className={`${
            currentMusic === 'rain' ? 'bg-blue-600' : 'bg-gray-700'
          } px-2 py-2 mx-2 rounded text-white focus:outline-none`}
        >
          Rain
        </button>
        <div className='flex my-6'>
        <FaMusic className="music-icon text-white" />
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
        url={`./${currentMusic}.mp3`}
        playing={isPlaying}
        loop={true}
        volume={volume}
        width="100%"
        height="100%"
      />
    </div></div>
    </div>
  );
};

export default PomodoroPage;
