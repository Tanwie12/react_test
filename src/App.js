import React from "react"; 
import { useSelector } from "react-redux";
// Import NextUI components and hooks
import { NextUIProvider } from "@nextui-org/react";

// Import custom components

import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import Accounts from "./pages/Acoounts";



export default function App() {
  const Theme = useSelector((state) => state.theme.theme);



  return (
    <NextUIProvider>
      <div className={Theme}>
      {/* Apply theme class to outer div */}
      
        
        <div className=" dark:bg-dark bg-background/60 w-screen h-screen flex overflow-hidden ">
          <Sidebar/>
          {/* <TableData/> */}
         <div className="flex-1 overflow-hidden">
         <Header/>
         <div className=" overflow-x-auto">
         <Accounts/>
         </div>
         </div>
        
        
      </div>
     
      
      
      </div>
    </NextUIProvider>
  );
}