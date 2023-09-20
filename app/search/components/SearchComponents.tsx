"use client";

import LikedButton from "@/components/LikedButton";
import MediaItems from "@/components/MediaItems";
import useOnPlay from "@/hooks/useOnPlay";
import usePlayer from "@/hooks/usePlayer";
import { Song } from "@/types";
import React from "react";

interface SearchComponentsProps {
  songs: Song[];
}

const SearchComponents: React.FC<SearchComponentsProps> = ({ songs }) => {
  const player=usePlayer();
  const onPlay=useOnPlay(songs)

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-3 w-full px-6">No Songs Found</div>
    );
  }
  return (
    <div className="flex flex-col gap-y-3 px-6 mt-3 w-full">

      {songs.map((song) => (
        <div className="flex items-center justify-between gap-x-6 w-full" key={song.id}>
            <div className="flex-2">
                <MediaItems data={song} onClick={(id:string)=>onPlay(id)} />
            </div>
            <LikedButton songId={song.id}/>
        </div>
      ))}
    </div>
  );
};

export default SearchComponents;
