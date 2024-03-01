import { Typography } from '@material-tailwind/react';
import React from 'react';
import TableData from '../components/Table';

export default function Accounts() {
  
  const Section = [
    {
      title: "Students",
      data: [{}]
    },
    {
      title: "Teachers",
      data: [{}]
      
    },
    {
      title: "Parents",
      data:[{}]
    },
  ];

  return (
    <div className="flex flex-wrap   overflow-y-auto md:pb-32  h-[calc(100vh-2rem)] bg-white">

{
  Section.map(section => (
    <div name="main div " className=' w-full rounded-lg'>
     
      <div name="div for the text" className="flex-1 ml-2 my-2  flex w-full">
        <Typography color="black dark:white" size="5xl" className="text-center  items-center">
          {section.title}
          </Typography>
      </div>
      <div name="div for the cards" className="flex  flex-wrap md:pr-10 md:pl-10 w-full pt-4 pb-10 mb-2 md:space-x-5 md:justify-normal bg-[#F2F2F2] justify-center">
        {
          section.data.map(data => (  
            <TableData />
          ))
        }
      </div>
      
      </div>
  ))


}

      

    </div>
  
  );
}
