import React, {useState} from 'react';
import Left from "../components/Left/index.jsx";
import Center from "../components/Center/index.jsx";
import Right from "../components/Right/index.jsx";

const HomeIndex = () => {

    const [type,setType] = useState(null);

    const typeCb = (arg) => {
        setType(arg)
    }

    return (
        <div className="HomeIndex">
            <Left/>
            <Center type={type}/>
            <Right typeCb={typeCb}/>
        </div>
    );
};

export default HomeIndex;