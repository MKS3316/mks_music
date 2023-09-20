"use client"

import getSongsByUserId from "@/actions/getSongsByUserId";
import useGetSongById from "@/hooks/useGetSongById";
import useGetSongUrl from "@/hooks/useGetSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

const Player = () => {

    const player=usePlayer();
    const {song}=useGetSongById(player.activeId);

    const songUrl=useGetSongUrl(song!)

    if(!song || !songUrl || !player.activeId){
        return null;
    }


    return ( 
        <div className="fixed bottom-0 bg-black w-full py-2 px-2 h-[80px]">
            <PlayerContent key={songUrl} songUrl={songUrl} songs={song}/>
        </div>
     );
}
 
export default Player;