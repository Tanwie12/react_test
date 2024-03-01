import React from "react";

import { useSelector } from "react-redux";
import ThemeSwitcher from "../utils/theme/ThemeSwitcher";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Card
} from "@material-tailwind/react";
import { PresentationChartBarIcon, SunIcon, MoonIcon, UserIcon } from "@heroicons/react/24/solid";

import { AdjustmentsVerticalIcon, ArrowTrendingUpIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export function Sidebar() {
  const sidebarvalue = useSelector((state) => state.sidebar.value);
 const Themevalue=useSelector((state) => state.theme.theme);
  
console.log(sidebarvalue+"for real")
  return (
    <>
     <Card
        className={`h-[calc(100vh)] w-0 md:w-full md:p-4  max-w-[20rem]  bg-[#9B679C]  shadow-xl shadow-blue-gray-900/5 ${
          sidebarvalue ? "" : "hidden"
        }`}
      >
          <div className="mb-2 flex items-center gap-4 p-4 dark:text-primary">
            <AdjustmentsVerticalIcon className="w-8 h-8"/>
            <Typography variant="h5">DJOKWA</Typography>
          </div>
          <List className="dark:text-gray-500 text-white">
            <ListItem>
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <CalendarDaysIcon className="h-5 w-5" />
              </ListItemPrefix>
              Events
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserIcon className="h-5 w-5" />
              </ListItemPrefix>
              My Account
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserIcon className="h-5 w-5" />
              </ListItemPrefix>
              Accounts
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <ArrowTrendingUpIcon className="h-5 w-5" />
              </ListItemPrefix>
              Latest Activity
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <ChatBubbleLeftRightIcon className="h-5 w-5" />
              </ListItemPrefix>
              Chat
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                {Themevalue === "light" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </ListItemPrefix>
              Mode
              <ThemeSwitcher />
            </ListItem>
          </List>
        </Card>
    </>
  );
}
