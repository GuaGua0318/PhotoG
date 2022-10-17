import React from 'react';
import {InputNumber, Select} from "antd";
import './index.scss'
import {useDispatch} from "react-redux";
import {EditCb} from "../../../../store/modules/ElementType.js";


const LineEdit = () => {

    const dispatch = useDispatch();

    return (
        <div className="LineWrapper">
            {/*<div className="Line-color">*/}
                <span>填充：</span>
                <input type='color' onChange={(e) => dispatch(EditCb(['fill',e.target.value]))}></input>
            {/*</div>*/}
            {/*<div className="Line-color">*/}
                <span>边框颜色：</span>
                <input type="color" onChange={(e) => dispatch(EditCb(['stroke',e.target.value]))}></input>
            {/*</div>*/}
            <div className="Line-color">
                <span>边框：</span>
                <InputNumber size="small" min={1} style={{width: 60}} onChange={(e) => dispatch(EditCb(['strokeWidth', e]))} />
            </div>
        </div>
    );
};

export default LineEdit;