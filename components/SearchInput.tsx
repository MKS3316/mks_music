"use client"

import qs from "query-string"

import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "./Input";
import SearchComponents from "@/app/search/components/SearchComponents";

const SearchInput = () => {

    const router=useRouter();
    const [value,setValue]=useState<string>("")
    const debouncedValue=useDebounce<string>(value,500)

    useEffect(()=>{
        const query={
            title:debouncedValue
        }

        const url=qs.stringifyUrl({
            url:"/search",
            query:query
        })

        router.push(url)
    },[router,debouncedValue])

    return ( 
        <div>
            <Input
            placeholder="Search your favourite 'Song'"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            />
            
        </div>
     );
}
 
export default SearchInput;