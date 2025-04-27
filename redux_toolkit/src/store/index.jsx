
import {configureStore} from "@reduxjs/toolkit"
import { UI } from "./UISlice"
import {Cart} from"./CartSlice"



export const store=configureStore({
    reducer:{ui:UI.reducer,
        cart:Cart.reducer
    }
     
})
