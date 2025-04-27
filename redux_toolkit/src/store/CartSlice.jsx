import { createSlice } from "@reduxjs/toolkit";
export const Cart=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
    addToCart(state,action){
      
    const isPresent=state.find((ele)=>action.payload.id===ele.id);
    if(isPresent){
        isPresent.quantity++;
    }
    else{
        const data={...action.payload,quantity:1}
        state.push(data)
    }
  


    },
    removeFromCart(state,action){

        const isPresent=state.find((ele)=>action.payload.id===ele.id);
        if(isPresent.quantity==1){
            return state.filter((ele)=>ele.id!=isPresent.id)
        }
        else{
            isPresent.quantity--;
        }
      

    }
}
})

export const  CartAction=Cart.actions;