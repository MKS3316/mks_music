"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthStoreModal from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";
import useUploadMoadal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import React from "react";
import MediaItems from "./MediaItems";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps{
  songs:Song[];
}

const Library:React.FC<LibraryProps> = ({songs}) => {
  const authModal = useAuthStoreModal();
  const uploadMoadal=useUploadMoadal();
  const { user } = useUser();
  const onPlay=useOnPlay(songs);

  const onClick = () => {
    console.log(user, "??????????");
    if (!user) {
      return authModal.onOpen();
    }
    return (uploadMoadal.onOpen());
  };

  console.log(songs,'?>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between pt-4 px-2">
        <div className="inline-flex items-center gap-x-3 mb-3">
          <TbPlaylist className="text-neutral-500" size={25} />
          <p className="text-neutral-300 text-xl font-medium">Song Library</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={20}
          className="
            text-neutral-400 
            cursor-pointer 
            hover:text-white 
            transition
          "
        />
      </div>
      
      <div className="flex flex-col gap-y-3 px-5 mt-3">
        {songs.map((item)=>(
          <MediaItems
            data={item}
            onClick={(id:string)=>onPlay(id)}
            key={item.id}
          />
        )
        )}
      </div>
    </div>
  );
};

export default Library;
