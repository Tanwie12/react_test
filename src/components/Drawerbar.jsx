import React from "react";
import { IconButton } from "@material-tailwind/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { changeValue } from "../store/Sidebarslice";
import { MobileDrawer } from "./MobileDrawer";

export function DrawerDefault() {
  const sidebarValue = useSelector(state => state.sidebar.value);
  const dispatch = useDispatch();

  const toggleSidebar = () => {
    dispatch(changeValue(!sidebarValue));
  };

  return (
    <><div className="md:hidden">
      {/* Render the mobile drawer only on smaller screens */}
      <MobileDrawer />
    </div><div className="hidden md:block">
        {/* Render the desktop drawer only on larger screens */}
        <IconButton variant="text" size="lg" onClick={toggleSidebar}>
          <Bars3Icon className="h-8 w-8 stroke-2" />
        </IconButton>
      </div></>
  );
}
