"use client"

import useLoadImage from "@/hooks/useLoadImage";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";

interface MediaItemsProps{
    data:Song,
    onClick?:(id:string)=>void,

}

const MediaItems:React.FC<MediaItemsProps> = ({data,onClick}) => {
    const imageUrl=useLoadImage(data)

    const handleClick=()=>{
        if(onClick){
            return onClick(data.id);
        }
    }


    return ( 
        <div onClick={handleClick} className="flex items-center gap-x-3 hover:bg-neutral-800/50 px-2 rounded-md w-full cursor-pointer">
            <div className=" relative min-h-[48px] min-w-[48px] rounded-md overflow-hidden">
                <Image
                    fill
                    src={imageUrl || "/images/liked.png "}
                    className="object-cover"
                    alt="Media Image"
                />      
            </div>
            <div className="flex flex-col gap-y-1 overflow-hidden">
                <p className="text-white truncate">{data.title}</p>
                <p className="text-sm text-neutral-400">{data.author}</p>
            </div>

        </div>
     );
}
 
export default MediaItems;