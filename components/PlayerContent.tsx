"use client";
import useSound from "use-sound"


import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";

import { Song } from "@/types";
import React, { useEffect, useState } from "react";

import MediaItems from "./MediaItems";
import LikedButton from "./LikedButton";
import Slider from "./Slider";
import usePlayer from "@/hooks/usePlayer";



interface PlayerContentProps {
  songs: Song;
  songUrl: string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({ songs, songUrl }) => {

    const player=usePlayer();
    const [volume,setVolume]=useState(1);
    const [isPlaying,setIsPlaying]=useState(false);

  const Icon = isPlaying ? BsPauseFill :BsPlayFill;
  const Volume = volume ? HiSpeakerWave : HiSpeakerXMark;


  const onPlayNext=()=>{
    if(player.ids.length===0){
        return;
    }

    const currentIndex=player.ids.findIndex((id)=>(id===player.activeId))
    const nextSong=player.ids[currentIndex+1]

    if(!nextSong){
        return player.setId(player.ids[0]);
    }
    
    return player.setId(nextSong);
  }

  const onPlayPrevious=()=>{
    if(player.ids.length===0){
        return;
    }
    const currentIndex=player.ids.findIndex((id)=>(id===player.activeId))
    const prevSong=player.ids[currentIndex-1];

    if(!prevSong){
        return player.setId(player.ids[player.ids.length-1])
    }

    return player.setId(prevSong)
  }

  const [play, { pause, sound }] = useSound(
    songUrl,
    { 
      volume: volume,
      onplay: () => setIsPlaying(true),
      onend: () => {
        setIsPlaying(false);
        onPlayNext();
      },
      onpause: () => setIsPlaying(false),
      format: ['mp3']
    }
  );

  useEffect(() => {
    sound?.play();
    
    return () => {
      sound?.unload();
    }
  }, [sound]);

  const handlePlay = () => {
    if (!isPlaying) {
      play();
    } else {
      pause();
    }
  }

  const toggleMute = () => {
    if (volume === 0) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  }


  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-0">
          <MediaItems data={songs} />
          <LikedButton songId={songs.id} />
        </div>
      </div>
      {/* Mobile */}
      <div
        className="flex 
            md:hidden 
            col-auto 
            w-full 
            justify-end 
            items-center "
      >
        <div onClick={handlePlay}
          className="
              h-10
              w-10
              flex 
              items-center 
              justify-center 
              rounded-full 
              bg-white 
              p-1 
              cursor-pointer
            "
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center gap-x-6 max-w-[722px]">
        <AiFillStepBackward
          onClick={onPlayPrevious}
          size={30}
          className=" rounded-full p-1  text-neutral-800 
              cursor-pointer 
              hover:text-white 
              transition bg-black items-center"
        />
        <div className=" rounded-full bg-white p-2 cursor-pointer" onClick={handlePlay}>
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          onClick={onPlayNext}
          size={30}
          className=" rounded-full p-1  text-neutral-800 
              cursor-pointer 
              hover:text-white 
              transition bg-black items-center"
        />
      </div>

      <div className="hidden md:flex items-center pr-2 justify-end gap-x-2">
        <div className="flex gap-x-2 items-center w-[120px]">
          <Volume size={34} onClick={toggleMute}/>
          <Slider value={volume} 
              onChange={(value) => setVolume(value)}/>
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;
