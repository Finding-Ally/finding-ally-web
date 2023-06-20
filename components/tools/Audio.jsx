import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function AudioComponent(){

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentMusic, setCurrentMusic] = useState();
    const [volume, setVolume] = useState(0.5);
  
    useEffect(() => {
      const storedMusic = localStorage.getItem("currentMusic");
      setCurrentMusic(storedMusic);
    
      let audio = new Audio(`../music/${storedMusic}.mp3`);
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
<div className="backdrop-blur-md grid-cols-4 gap-3 grid bg-black rounded-2xl p-4">
          <button
            onClick={() => changeMusic("birds")}
            className={`${
              currentMusic === "birds" ? "bg-gray-200" : "bg-gray-400"
            } p-0.5 mx-2 rounded-full text-white focus:outline-none`}
          >
            <img src="../audioImages/Bird.png" alt="" className="w-8 h-8 rounded-full" />
          </button>

          <button
            onClick={() => changeMusic("campfire")}
            className={`${
              currentMusic === "campfire" ? "bg-gray-200" : "bg-gray-400"
            } p-0.5 mx-2 rounded-full text-white focus:outline-none`}
          >
            <img src="../audioImages/Bonfire.png" alt="" className="w-8 h-8 rounded-full" />
          </button>

          <button
            onClick={() => changeMusic("forest")}
            className={`${
              currentMusic === "forest" ? "bg-gray-200" : "bg-gray-400"
            } p-0.5 mx-2 rounded-full text-white focus:outline-none`}
          >
            <img src="../audioImages/Forest.png" alt="" className="w-8 h-8 rounded-full" />
          </button>

          <button
            onClick={() => changeMusic("library-audio")}
            className={`${
              currentMusic === "library-audio" ? "bg-gray-200" : "bg-gray-400"
            } p-0.5 mx-2 rounded-full text-white focus:outline-none`}
          >
            <img src="../audioImages/LibraryBuilding.png" alt="" className="w-8 h-8 rounded-full" />
          </button>

          <button
            onClick={() => changeMusic("Morning-Routine-audio")}
            className={`${
              currentMusic === "Morning-Routine-audio" ? "bg-gray-200" : "bg-gray-400"
            } p-0.5 mx-2 rounded-full text-white focus:outline-none`}
          >
            <img src="../audioImages/MorningNews.png" alt="" className="w-8 h-8 rounded-full" />
          </button>

          <button
            onClick={() => changeMusic("cafe-audio")}
            className={`${
              currentMusic === "cafe-audio" ? "bg-gray-200" : "bg-gray-400"
            } p-0.5 mx-2 rounded-full text-white focus:outline-none`}
          >
            <img src="../audioImages/Music.png" alt="" className="w-8 h-8 rounded-full" />
          </button>


          <button
            onClick={() => changeMusic("rain")}
            className={`${
              currentMusic === "rain" ? "bg-gray-200" : "bg-gray-400"
            } p-0.5 mx-2 rounded-full text-white focus:outline-none`}
          >
            <img src="../audioImages/Rain.png" alt="" className="w-8 h-8 rounded-full" />
          </button>


          <button
            onClick={() => changeMusic("study-alone")}
            className={`${
              currentMusic === "study-alone" ? "bg-gray-200" : "bg-gray-400"
            } p-0.5 mx-2 rounded-full text-white focus:outline-none`}
          >
            <img src="../audioImages/ReadingUnicorn.png" alt="" className="w-8 h-8 rounded-full" />
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