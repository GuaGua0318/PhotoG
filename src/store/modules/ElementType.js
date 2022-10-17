import { createSlice } from "@reduxjs/toolkit";

const ElementType = createSlice({
    name:'ElementType',
    initialState:{
        type:'',
        isSave:false,
        Tplshow:false,
        TplId:'',
        xzSelect:'',
        file:new Blob()
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
        },
        HandleXz(state,action){
            state.xzSelect = action.payload;
        },
        GetFile(state,action){
            state.file = action.payload;
        }
    }
})

export const { GetType,SaveImg,HandleTplShow,SelectTpl,HandleXz,GetFile } = ElementType.actions;

export default ElementType.reducer