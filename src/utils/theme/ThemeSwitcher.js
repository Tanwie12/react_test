import React from "react";
import { useDispatch } from "react-redux";
import { Themechanger } from "../../store/ThemeSlicer";
import {  Switch } from "@nextui-org/react";
import { SunIcon,MoonIcon } from "./Sunicon";

export default function ThemeSwitcher() {
  const [theme, setTheme] = React.useState("light");

  const dispatch = useDispatch();

  const toggleTheme = React.useCallback(() => {
    console.log("hiihihi")
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    dispatch(Themechanger(newTheme))
    console.log(Themechanger);
  }, [theme, dispatch]);

  

  return (
    <div className=" mx-auto top-0 ">
 
      <Switch
      onClick={toggleTheme}
      defaultSelected
      size="lg"
      color="success"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    >
    
    </Switch>

    </div>
  );
}
