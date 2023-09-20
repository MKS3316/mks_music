"use client"

import AuthModal from "@/components/AuthModal";
import Modal from "@/components/Modal";
import UploadMoadal from "@/components/UploadModal";
import { useEffect, useState } from "react";

const ModalProvider = () => {

    const [isMounted,setIsMounted]=useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null;
    }

    return ( 
        <>
            <AuthModal/>
            <UploadMoadal/>
        </>
     );
}
 
export default ModalProvider;