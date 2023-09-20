"use client"

import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";

import { useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AuthModal from "./AuthModal";
import { useUser } from "@/hooks/useUser";
import useAuthStoreModal from "@/hooks/useAuth";
import { toast } from "react-hot-toast";

interface LikedButtonProps{
    songId:string
}

const LikedButton:React.FC<LikedButtonProps> = ({songId}) => {

    const router=useRouter();
    const {supabaseClient}=useSessionContext();
    const authModal=useAuthStoreModal()
    const {user}=useUser();

    const [isLiked,setIsLiked]=useState(false);

    useEffect(()=>{
        if(!user?.id){
            return;
        }

        const fetchData=async ()=>{
            const {data,error}=await supabaseClient
                .from('liked_songs')
                .select('*')
                .eq('user_id', user?.id)
                .eq('song_id',songId)
                .single();

            if(!error && data){
                setIsLiked(true)
            }
        }
        fetchData();

    },[supabaseClient,user?.id,songId])

    const Icon=isLiked?AiFillHeart:AiOutlineHeart;

    const handleClick=async()=>{
        if(!user){
            return authModal.onOpen()
        }
        if(isLiked){
            const {error}=await supabaseClient
                .from('liked_songs')
                .delete()
                .eq('user_id',user.id)
                .eq('song_id',songId)

            if(error){
                toast.error(error.message)
            }
            else{
                setIsLiked(false)
            }
        }
        else{
            const {error}=await supabaseClient
                .from('liked_songs')
                .insert({
                    user_id:user.id,
                    song_id:songId
                })
            if(error){
                toast.error(error.message)
            }
            else{
                setIsLiked(true)
                toast.success('Success')
            }
        }
        router.refresh()
    }

    return ( 
        <button className="hover:opacity-75 transition cursor-pointer" onClick={handleClick}>
            <Icon size={25} color={isLiked?'#22c55e' : 'white'}/>
        </button>
     );
}
 
export default LikedButton;