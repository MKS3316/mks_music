"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {FaPlay} from "react-icons/fa"

interface ListItemsProps{
    image:string,
    name:string,
    href:string,
}

const ListItems:React.FC<ListItemsProps> = ({
    image,
    name,
    href
}) => {

    const router=useRouter();
    const onClick=()=>{
        router.push(href);
    }

    return ( 
        <button onClick={onClick} className="relative bg-neutral-100/20 hover:bg-neutral-100/10 group flex items-center rounded-lg gap-x-4 overflow-hidden transition">
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image src={image} alt="image" className="object-cover" fill />
            </div>
            <p className="text-lg">{name}</p>
            <div className="absolute bg-green-500 opacity-0 rounded-full drop-shadow-md p-4 right-5 flex items-center justify-center group-hover:opacity-100 transition">
                <FaPlay/>
            </div>
        </button>
     );
}
 
export default ListItems;