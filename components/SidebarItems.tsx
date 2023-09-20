import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarItemsProps{
    label:string,
    icon:IconType,
    active:boolean,
    href:string,
}

const SidebarItems:React.FC<SidebarItemsProps> = ({
    label,
    icon:Icon,
    active,
    href,
}) => {
    return ( 
        <div>
            <Link href={href} className={twMerge(`flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium hover:text-white text-neutral-400 transition cursor-pointer py-2`,active&& `text-white`)}>
            <Icon size={26}/>
            <p className="truncate">{label}</p>
        </Link>
        </div>
        
        
     );
}
 
export default SidebarItems;