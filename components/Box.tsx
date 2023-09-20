"use client"

import React from "react";
import { twMerge } from "tailwind-merge";

interface BoxProps{
    children:React.ReactNode
    classname?:string
}

const Box:React.FC<BoxProps> = ({children, classname}) => {
    return ( 
        <div className={twMerge(`bg-neutral-800 px-2 h-fit w-full rounded-lg`,classname)}>
            {children}
        </div>
     );
}
 
export default Box;