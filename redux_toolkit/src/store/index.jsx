
import {configureStore} from "@reduxjs/toolkit"
import { UI } from "./UISlice"



export const store=configureStore({
    reducer:{ui:UI.reducer}
})
