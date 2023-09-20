import React from "react";
import { isJsxOpeningElement } from "typescript";
import { create } from "zustand";

interface AuthStoreModal{
    isOpen:boolean,
    onOpen:()=>void
    onClose:()=>void
}

const useAuthStoreModal=create<AuthStoreModal>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

export default useAuthStoreModal;