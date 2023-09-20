"use client";

import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import React from "react";
import { twMerge } from "tailwind-merge";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";
import useAuthStoreModal from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";
import { SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FaUserAlt } from "react-icons/fa";
import { toast } from "react-hot-toast";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  const { user } = useUser();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();
  const authModal = useAuthStoreModal();


  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();
    //
    router.refresh();

    if (error) {
        toast.error('error while logging out')
    }
    else{
        toast.success('Logout Successfull');
    }
  };

  
  const onClickf=(href:string)=>{
    router.push(href)
  }

  return (
    <div
      className={twMerge(`p-6 bg-gradient-to-b from-emerald-600`, className)}
    >
      <div className="flex items-center justify-between w-full mb-5">
        <div className="hidden md:flex gap-x-4 items-center">
          <button className="bg-black rounded-full flex items-center justify-center hover:opacity-75 transition">
            <RxCaretLeft size={30} />
          </button>
          <button className="bg-black rounded-full flex items-center justify-center hover:opacity-75 transition">
            <RxCaretRight size={30} />
          </button>
        </div>
        {/* Mobile View */}
        <div className="flex gap-x-4 md:hidden">
          <button className="bg-black p-2 rounded-full flex items-center justify-center hover:opacity-75 transition" onClick={()=>onClickf("/")}>
            <HiHome size={20} />
          </button>
          <button className="bg-black p-2 rounded-full flex items-center justify-center hover:opacity-75 transition" onClick={()=>onClickf("/search")}>
            <BiSearch size={20} />
          </button>
        </div>

        <div className="flex gap-x-3 items-center justify-between">
          {user ? (
            <div className="flex items-center gap-x-3">
              <Button onClick={handleLogout} className="bg-white w-[110px]">Log Out</Button>
              <Button className="bg-white w-10">
                <FaUserAlt />
              </Button>
            </div>
          ) : (
            <>
              <div onClick={authModal.onOpen}>
                <Button className="bg-transparent text-neutral-300">
                  Sign Up
                </Button>
              </div>
              <div onClick={authModal.onOpen}>
                <Button className="bg-white">Log In</Button>
              </div>
            </>
          )}
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
