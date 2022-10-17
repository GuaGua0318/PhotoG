import React, {useState} from 'react';
import Left from "../components/Left/index.jsx";
import Center from "../components/Center/index.jsx";
import Right from "../components/Right/index.jsx";
import {Context} from "../utils/Context";
import './index.scss'

const HomeIndex = () => {


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