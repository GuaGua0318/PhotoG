import React, {useState} from 'react';
import Left from "../components/Left/index.jsx";
import Center from "../components/Center/index.jsx";
import Right from "../components/Right/index.jsx";
import {Context} from "../utils/Context";

const HomeIndex = () => {

    const [type,setType] = useState(null);
    const [attrs,setAttrs] = useState(null)

    //将添加元素的类型进行回传
    const typeCb = (arg) => {
        setType(arg)
    }
    const textEditCb = (type,val) => {
        setAttrs([type,val]);
    }

    return (
        <div className="HomeIndex">
            <Context.Provider value={{textEditCb}}>
                <Left/>
                <Center type={type} attrs={attrs}/>
                <Right typeCb={typeCb}/>
            </Context.Provider>
        </div>
    );
};

export default HomeIndex;