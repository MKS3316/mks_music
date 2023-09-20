"use client"

import React, { useMemo } from "react";
import {usePathname} from "next/navigation"
import Box from "./Box";
import {HiHome} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"
import SidebarItems from "./SidebarItems";
import Library from "./Library";
import { Song } from "@/types";
import { twMerge } from "tailwind-merge";
import Player from "./Player";
import usePlayer from "@/hooks/usePlayer";

interface SidebarProps{
    children:React.ReactNode
    songs:Song[]
}
{/*
    {routes.map((item)=>{
            <div key={item.label} {...item}>
              <button></button>
            </div>
          })}
*/}

const Sidebar:React.FC<SidebarProps> = ({children,songs}) => {
    const player=usePlayer();

    const pathname=usePathname();

    const routes=useMemo(()=>[
        {
            icon:HiHome,
            label:"Home",
            href:"/",
            active:pathname!=="/search",

        },
        {
            icon:BiSearch,
            label:"Search",
            href:"/search",
            active:pathname==="/search",
        },
    ],[pathname])

    return ( 
        <div className={twMerge(`p-2 flex h-full`,player.activeId && "h-[calc(100%-80px)]")}>
            <div className={`h-full w-[300px] bg-black hidden md:flex flex-col p-2 gap-y-2`}>
            <Box>
                <div className={`flex flex-col space-y-4 px-5 py-3`}>
                    {routes.map((item)=>(
                        <SidebarItems 
                        key={item.label}
                        {...item}
                        />
                    ))}
                </div>
            </Box>
            <Box classname="h-full overflow-y-auto">
                <Library songs={songs}/>
            </Box>         
        </div>
        <main className="w-full">
            {children}
        </main>
        </div>
        
     );
}
 
export default Sidebar;