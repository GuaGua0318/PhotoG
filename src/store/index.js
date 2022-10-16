//创建store
import {configureStore} from "@reduxjs/toolkit";
import ElementType from "./modules/ElementType.js";

export default configureStore({
    reducer:{
        ElementType
    }
})