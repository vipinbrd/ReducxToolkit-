import {createSlice} from "@reduxjs/toolkit"

export const UI=createSlice({
name:"ui",
initialState:{isCartShow:false,notification:false},
reducers:{
    toggle(state){
        state.isCartShow=!state.isCartShow
    },
    setNotification(state,action){
     state.notification=action.payload
    }
}


})

export function setUIMessage(message){
 return (dispatch)=>{
    dispatch(UI.actions.setNotification(message))

 }

}
export const UIAction=UI.actions;