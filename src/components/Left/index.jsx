import React from 'react';
import './index.scss'
import {useState} from "react";
import { SelectTpl } from '../../store/modules/ElementType.js'
import { useDispatch } from "react-redux";

const Left = () => {

    const dispatch = useDispatch();
    const [tpls,setTpls] = useState(() => {
        const tpls = JSON.parse(localStorage.getItem('tpls') || "{}");
        return Object.keys(tpls).map((item) => ({t:tpls[item].t,id:item}))
    })

    return (
        <div className="left">
            <p className="text">模板素材</p>
            <div className="tpls">
                {
                    tpls.map((item,i) => {
                        return <div key={i} className="tpl" onClick={() => dispatch(SelectTpl(item.id))}>
                            <img src={JSON.parse(localStorage.getItem('tplImgs') || "{}")[item.id]} alt="" />
                            <div className="tpl-text">{ item.t }</div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Left;