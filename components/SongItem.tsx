"use client";

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import PlayButton from "./PlayButton";

interface SongItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const SongItem: React.FC<SongItemProps> = ({ data, onClick }) => {
  const imagePath = useLoadImage(data);

  return (
    <div
      onClick={() => onClick(data.id)}
      className="flex flex-col items-center justify-center relative group rounded-md overflow-hidden gap-x-4 cursor-pointer bg-neutral-400/5 hover:bg-neutral-400/10 transition pt-3 p-3"
    >
      <div className="w-full h-full relative aspect-square rounded-md overflow-hidden">
        <Image
          src={imagePath || "/images/liked.png"}
          className="object-cover"
          fill
          alt="Image"
        />
      </div>
      <div className="flex flex-col items-start p-4 gap-y-2 w-full">
        <p className="font-semibold truncate w-full">{data.title}</p>
        <p className="text-neutral-400 truncate w-full">{data.author}</p>
      </div>
      <div className="absolute bottom-[110px] right-5">
        <PlayButton/>
      </div>
    </div>
  );
};

export default SongItem;
