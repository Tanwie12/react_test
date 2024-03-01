import { createSlice} from "@reduxjs/toolkit";
// side bar change value
const initialState = {
    value: true,
}


    //favorite slice
   


const sideBarSlice = createSlice({
    name: 'sideBar',
    initialState,
    reducers: {
            changeValue: (state, action) => {
                state.value = action.payload;
            },
        }
    })

    export const { changeValue } = sideBarSlice.actions;

   
    export const selectSideBar = state => state.sidebar.value;
    export const sideBarReducer= sideBarSlice.reducer;
   


