"use client"

import Box from "@/components/Box";

const Error = () => {
    return ( 
        <Box classname="h-full flex flex-col p-5 items-center justify-center">
            <h1 className="text-3xl text-neutral-300">
                Error
            </h1>
            <div className="text-neutral-400 ">
                Something went wrong.
            </div>
        </Box>
     );
}
 
export default Error;