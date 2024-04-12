"use client"
import { Button } from "@/components/ui/button";
import logo from "../../../public/logo.png";
import blackLogo from "../../../public/black logo.png"
import { useTheme } from "next-themes";
import { AiOutlineClose,AiOutlineMenu  } from "react-icons/ai";
import { useEffect, useState } from "react";
import {Github} from "lucide-react"
import { useRouter } from "next/navigation";
import { ThemeDropDown } from "./ThemeDropDown/ThemeDropDown";
 export function Navbar() {
  const [nav,setNav] =useState(false);
  const { theme,setTheme } = useTheme();
  useEffect(()=>{
    setTheme("dark");
  },[])
  const handleNav =()=>{
      setNav(!nav)
  }
  const router= useRouter();
   return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="flex items-center justify-between  gap-16">
      <img
          className="hover:scale-105 w-32 h-10"
          src={theme === "dark" ? logo.src : blackLogo.src}
          alt="Logo"
        />
     <ul className={`hidden md:flex gap-7 items-center font-sans ${theme === 'dark' ? ' text-gray-500' : ' text-slate-600'} font-semibold text-lg`}>

      <li className={`p-3 ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Manufacture</li>
  <li className={`p-3 ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>User</li>
      </ul>
      </div>
     {/* right side */}
     <div className="flex items-center justify-evenly ml-5 md:ml-0 gap-4">
      <p className={`font-sans text-zinc-500 font-bold md:block hidden ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Complaints</p>
      <ThemeDropDown/>
       <Button onClick={()=>{router.push("https://gihub.com") }} variant="secondary" className="  source-code flex items-center gap-2 h-10 w-22  md:h-auto  md:w-auto"><Github size={20}/> Source Code
       </Button>
       <div onClick={handleNav} className='block md:hidden'>
      {nav ? <AiOutlineClose size={20}/> :<AiOutlineMenu size={20}/>}
      </div>
       {/* Mobile view */}

      <div className={nav ? "fixed h-full left-0 top-0 w-[60%] bg-[#292929] ease-in-out duration-500 z-10" :"fixed left-[-100%]"}>
      <img  className=" hover:scale-105  h-10  w-28 mt-5 ml-3 " src={logo.src} alt="Logo"></img>
      <ul className=" flex flex-col   mt-5   font-sans text-zinc-500 font-semibold text-xl" >
      <li className={`p-3 ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Manufacture</li>
  <li className={`p-3 ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>User</li>
  <li className={`p-3 ${theme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Complaints</li>
      </ul>
      </div>
     </div>

    </div>
   );
 }
