import React, {useState} from 'react';
import Left from "../components/Left/index.jsx";
import Center from "../components/Center/index.jsx";
import Right from "../components/Right/index.jsx";
import {Context} from "../utils/Context";

const HomeIndex = () => {

    const [attrs,setAttrs] = useState(null)

    //将添加元素的类型进行回传
    const EditCb = (type,val) => {
        setAttrs([type,val]);
    }

    return (
        <div className="HomeIndex">
            <Context.Provider value={{EditCb}}>
                <Left/>
                <Center attrs={attrs}/>
                <Right/>
            </Context.Provider>
        </div>
    );
};

export default HomeIndex;