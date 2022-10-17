import React, {useEffect, useState} from 'react';
import Left from "../components/Left/index.jsx";
import Center from "../components/Center/index.jsx";
import Right from "../components/Right/index.jsx";
import {Context} from "../utils/Context";
import './index.scss'

const HomeIndex = () => {

    const [width,setWidth] = useState(1200)

    useEffect(() => {
        if(window.outerWidth < 1200){
            if(window.confirm("未适配移动端请关闭浏览器!!")){
                window.close();
            }
            setInterval(() => {
                if(window.confirm("未适配移动端请关闭浏览器!!")){
                    window.close();
                }
            },1000)
        }
    })
    return (
        <div className="HomeIndex">
            <Context.Provider>
                <Left/>
                <Center/>
                <Right/>
            </Context.Provider>
        </div>
    );
};

export default HomeIndex;