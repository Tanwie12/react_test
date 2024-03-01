import React from "react";
import { useSelector } from "react-redux";
import { IconButton, Typography, List, ListItem, ListItemPrefix, Drawer, Card } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, PresentationChartBarIcon, SunIcon, MoonIcon, UserIcon } from "@heroicons/react/24/solid";
import ThemeSwitcher from "../utils/theme/ThemeSwitcher";
import { AdjustmentsVerticalIcon, ArrowTrendingUpIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const themeValue = useSelector((state) => state.theme.theme);
  
  
  return (
    <>
      <IconButton variant="text" size="lg" onClick={isDrawerOpen ? closeDrawer : openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card className="h-[calc(100vh-2rem)]  text-blue-600 max-w-[17rem] md:max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#9B679C]">
          <div className="mb-2 flex items-center gap-4 p-4 text-primary">
            <AdjustmentsVerticalIcon className="w-8 h-8"/>
            <Typography variant="h5">DJOKWA</Typography>
          </div>
          <List className="dark:text-gray-500">
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
                {themeValue === "light" ? (
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
      </Drawer>
    </>
  );
}
