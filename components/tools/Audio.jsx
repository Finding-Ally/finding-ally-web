import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function AudioComponent(){

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentMusic, setCurrentMusic] = useState();
    const [volume, setVolume] = useState(0.5);
  
    useEffect(() => {
      const storedMusic = localStorage.getItem("currentMusic");
      setCurrentMusic(storedMusic);
    
      let audio = new Audio(`./${storedMusic}.mp3`);
      audio.play();
    
      return () => {
        // Clean up the audio element when the component unmounts
        audio.pause();
        audio = null;
      };
    }, [currentMusic]); // Add currentMusic as a dependency
    
    
  
    const togglePlay = () => {
      setIsPlaying(!isPlaying);
    };
    const handleVolumeChange = (event) => {
      const volumeValue = parseFloat(event.target.value);
      setVolume(volumeValue);
    };
  
    

  const changeMusic = (music) => {
    setCurrentMusic(music);
    localStorage.setItem("currentMusic", music);
  };



    return (
<div className="backdrop-blur-md bg-black rounded-2xl p-4">
          <button
            onClick={() => changeMusic("birds")}
            className={`${
              currentMusic === "birds" ? "bg-blue-600" : "bg-gray-700"
            } px-2 py-2 mx-2 rounded text-white focus:outline-none`}
          >
            Birds
          </button>
          <button
            onClick={() => changeMusic("campfire")}
            className={`${
              currentMusic === "campfire" ? "bg-blue-600" : "bg-gray-700"
            } px-2 py-2 mx-2 rounded text-white focus:outline-none`}
          >
            Campfire
          </button>
          <button
            onClick={() => changeMusic("forest")}
            className={`${
              currentMusic === "forest" ? "bg-blue-600" : "bg-gray-700"
            } px-2 py-2 mx-2 rounded text-white focus:outline-none`}
          >
            Forest
          </button>
          <button
            onClick={() => changeMusic("rain")}
            className={`${
              currentMusic === "rain" ? "bg-blue-600" : "bg-gray-700"
            } px-2 py-2 mx-2 rounded text-white focus:outline-none`}
          >
            Rain
          </button>
          {/* <div className="flex my-6">
            <FaMusic className="music-icon text-white" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="mx-2"
            />
          </div> */}
        {/* <div className="gif-container mt-4">
          <ReactPlayer
            url={`../${currentMusic}.mp3`}
            playing={isPlaying}
            loop={true}
            volume={volume}
            width="100%"
            height="100%"
          />
        </div> */}
        </div>

    )
}