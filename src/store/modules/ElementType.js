import { createSlice } from "@reduxjs/toolkit";

const ElementType = createSlice({
    name:'ElementType',
    initialState:{
        type:'',
        isSave:false,
        Tplshow:false,
        TplId:''
    },
    reducers:{
        GetType(state,action){
            state.type = action.payload;
        },
        SaveImg(state,action){
            state.isSave = action.payload;
        },
        HandleTplShow(state,action){
            state.Tplshow = action.payload;
        },
        SelectTpl(state,action){
            state.TplId = action.payload;
        }

    }
})

export const { GetType,SaveImg,HandleTplShow,SelectTpl } = ElementType.actions;

export default ElementType.reducer