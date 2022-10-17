import React from 'react';
import {Select} from "antd";
import {useDispatch} from "react-redux";
import {EditCb} from "../../../../store/modules/ElementType.js";
import './index.scss'


const Option = Select;

const TriangleEdit = () => {

    const dispatch = useDispatch();

    return (
        // <div className="TriangleWrapper">
            <div className="Triangle-color">
                <span>填充：</span>
                <input type='color' onChange={(e) => dispatch(EditCb(['fill',e.target.value]))}></input>
            {/*</div>*/}
            {/*<div className="Triangle-color">*/}
                <span>边框颜色：</span>
                <input type="color" onChange={(e) => dispatch(EditCb(['stroke',e.target.value]))}></input>
            {/*</div>*/}
            {/*<div className="Triangle-color">*/}
                <span>边框：</span>
                <Select
                    defaultValue="12"
                    style={{
                        width: 120,
                    }}
                    onChange={(e) => dispatch(EditCb(['strokeWidth',e]))}
                >
                    <Option value="12">12</Option>
                    <Option value="14">14</Option>
                    <Option value="16">16</Option>
                    <Option value="18">18</Option>
                    <Option value="20">20</Option>
                    <Option value="22">22</Option>
                    <Option value="24">24</Option>
                </Select>
            {/*</div>*/}
        </div>
    );
};

export default TriangleEdit;