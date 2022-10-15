import React from 'react';
import Left from "../components/Left/index.jsx";
import Center from "../components/Center/index.jsx";
import Right from "../components/Right/index.jsx";

const HomeIndex = () => {
    return (
        <div className="HomeIndex">
            <Left/>
            <Center/>
            <Right/>
        </div>
    );
};

export default HomeIndex;