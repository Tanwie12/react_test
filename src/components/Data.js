import { nanoid } from "@reduxjs/toolkit";

const columns = [
  {name: "DATE", uid: "date"},
  {name: "STUDENT", uid: "name"},
  {name: "CLASS", uid: "class"},
  {name: "STATUS", uid: "status"},
  {name: "ACTIONS", uid: "actions"},
];

const users = [
  {
    id: nanoid(),
    date:"12/04/24",
    name: "Tony Reichert",
    class: "F1",
    status: "current",
    age: "29",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
   
  },
  {
    id: nanoid(),
    date:"12/04/24",
    name: "Zoey Lang",
    class: "F4",
    status: "Former",
    age: "25",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    
  },
  {
    id: 3,
    date:"12/04/24",
    name: "Jane Fisher",
    class: "F1",
    status: "current",
    age: "22",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  
  },
  {
    id: nanoid(),
    date:"12/04/24",
    name: "William Howard",
    class: "F2",
    status: "Former",
    age: "28",
    avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
   
  },
  {
    id: nanoid(),
    date:"12/04/24",
    name: "Kristen Copper",
    class: "F3",
    status: "current",
    age: "24",
    avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    
  },
];

export {columns, users};
