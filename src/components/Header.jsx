import React from "react";

import {
  Navbar,
  Input,
  Typography,
 
} from "@material-tailwind/react";
import { DrawerDefault } from "./Drawerbar";
import { BellIcon} from "@heroicons/react/24/solid";
import { Cog8ToothIcon as Settings, MagnifyingGlassIcon } from "@heroicons/react/24/outline";




export default function Header() {
  return (
    <div className="max-h-[768px] md:w-[calc(100%+48px)] mx-auto  bg-background">
      <Navbar className="sticky top-0 z-10 h-max max-w-full  dark:bg-gray-500 rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between md:gap-20 dark:text-primary text-dark">
          <div className="flex items-center md:gap-10 p-2 rounded-md">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <DrawerDefault/>
          </Typography>
          <Typography className="">
            Accounts
          </Typography>
          </div>
          <div className=" flex-1 flex justify-around">
          
          <div className="p-2 relative hidden md:block">
  <Input
    type="text"
    label="Search"
    
    className="md:pl-32 md:pr-16 py-2 border border-gray-300  rounded-md w-full"
  />
  <MagnifyingGlassIcon className="h-5 w-5 absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" />
</div>
<div name="div for search " className="flex items-center gap-4">
          <div className="w-7 h-7 shadow-lg flex  justify-center rounded-lg bg-white-400">
<BellIcon className=" w-5 h-5 my-auto"/>
          </div>
          <div className="w-7 h-7 flex justify-center shadow-lg rounded-lg bg-white-300">
<Settings className=" w-5 h-5 my-auto"/>
</div>
          </div>
          
          </div>
          
        </div>
       
      </Navbar>
      </div>
  )
}
