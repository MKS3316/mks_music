"use client"
import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
    return ( 
        <div className="rounded-full bg-green-500 transition opacity-0 flex items-center p-3 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
            <FaPlay className="text-black"/>
        </div>
     );
}
 
export default PlayButton;