import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}



const Button = forwardRef<HTMLButtonElement,ButtonProps>(({
    children,
    className,
    type="button",
    disabled,
    onClick,
    ...props    
},ref)=>{
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={twMerge(`border hover:opacity-75 transition py-3 border-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed w-full rounded-full px-3 text-black bg-green-500`,className)}>
            {children}
        </button>
    )
})

Button.displayName="Button"
 
export default Button;