import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducer } from "./ThemeSlicer";
import { cardReducer, comedyReducer, crimeReducer, favoriteReducer, horrorReducer, newsReducer, sideBarReducer, sportReducer } from "./Sidebarslice";


// Here is a reference snippet of code from client\src\components\Drawerbar.jsx:    

export const store = configureStore({
  reducer: {
    theme:ThemeReducer,
    sidebar:sideBarReducer,
    card: cardReducer,
    crime: crimeReducer,
    sport: sportReducer,
    news:newsReducer,
    horror: horrorReducer,
    comedy: comedyReducer ,
    favorite:favoriteReducer,

  }
})