import { Song } from "@/types";
import useAuthStoreModal from "./useAuth";
import usePlayer from "./usePlayer";
import { useUser } from "./useUser";


const useOnPlay = (songs:Song[]) => {

    const player=usePlayer();
    const {user}=useUser();
    const authmodal=useAuthStoreModal();

    const onPlay=(id:string)=>{
        if(!user){
            return (authmodal.onOpen())
        }

        player.setId(id)
        player.setIds(songs.map((song)=>(song.id)));
    }

    return ( 
        onPlay
     );
}
 
export default useOnPlay;