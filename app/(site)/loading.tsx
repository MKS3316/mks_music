"use client"

import Box from "@/components/Box";
import { BounceLoader } from "react-spinners";

const Loading = () => {
    return ( 
        <Box classname="h-full flex items-center justify-center">
            <BounceLoader size={50} color="#ffffff"/>
        </Box>
     );
}
 
export default Loading;