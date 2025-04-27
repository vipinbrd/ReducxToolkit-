import {createSlice} from "@reduxjs/toolkit"

export const UI=createSlice({
name:"ui",
initialState:{isCartShow:false},
reducers:{
    toggle(state){
        state.isCartShow=!state.isCartShow
    }
}


})
export const UIAction=UI.actions;