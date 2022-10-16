import { createSlice } from "@reduxjs/toolkit";

const ElementType = createSlice({
    name:'ElementType',
    initialState:{
        type:'',
        isType:true
    },
    reducers:{
        GetType(state,action){
            state.type = action.payload;
            state.isType = !action.payload
        }
    }
})

export const { GetType } = ElementType.actions;

export default ElementType.reducer