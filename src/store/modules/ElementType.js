import { createSlice } from "@reduxjs/toolkit";

const ElementType = createSlice({
    name:'ElementType',
    initialState:{
        type:'',
        isSave:false,
        Tplshow:false,
        TplId:'',
        xzSelect:'',
        file:new Blob(),
        attrs:[],
        isAttrs:false
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
        },
        EditCb(state,action){
            state.attrs = action.payload;
            console.log(state.attrs)
        }
    }
})

export const { GetType,SaveImg,HandleTplShow,SelectTpl,HandleXz,GetFile,EditCb } = ElementType.actions;

export default ElementType.reducer