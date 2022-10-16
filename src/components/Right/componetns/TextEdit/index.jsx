import {Select} from "antd";
import './index.scss'
import {useContext} from "react";
import {Context} from "../../../../utils/Context.js";

const Option = Select;
const TextEdit = () => {

    const {EditCb} = useContext(Context);

    return (
        <div className="textWrapper">
            <div className="text-color">
                <span>填充</span>
                <input type='color' onChange={(e) => EditCb('fill',e.target.value)}></input>
            </div>
            <div className="text-size">
                <span>字号:</span>
                <Select
                    defaultValue="12"
                    style={{
                        width: 120,
                    }}
                    onChange={(e) => EditCb('fontSize',e)}
                >
                    <Option value="12">12</Option>
                    <Option value="14">14</Option>
                    <Option value="16">16</Option>
                    <Option value="18">18</Option>
                    <Option value="20">20</Option>
                    <Option value="22">22</Option>
                    <Option value="24">24</Option>
                </Select>
            </div>
            <div className="text-stroke">
                <span>边框：</span>
                <input type='color' onChange={(e) => EditCb('stroke',e.target.value)}></input>
            </div>
            <div className="text-strokeWidth">
                <span>边框宽度：</span>
                <Select
                    defaultValue="12"
                    style={{
                        width: 120,
                    }}
                    onChange={(e) => EditCb('strokeWidth','e')}
                >
                    <Option value="12">12</Option>
                    <Option value="14">14</Option>
                    <Option value="16">16</Option>
                    <Option value="18">18</Option>
                    <Option value="20">20</Option>
                    <Option value="22">22</Option>
                    <Option value="24">24</Option>
                </Select>
            </div>
            <div className="text-Weight">
                <span>字体宽度：</span>
                <Select
                    defaultValue="300"
                    style={{
                        width: 120,
                    }}
                    onChange={(e) => EditCb('fontWeight',e)}
                >
                    <Option value="300">300</Option>
                    <Option value="500">500</Option>
                    <Option value="700">700</Option>
                    <Option value="900">900</Option>
                    <Option value="1100">1100</Option>
                    <Option value="1300">1300</Option>
                    <Option value="bold">bold</Option>
                </Select>
            </div>
            <div className="text-underline">
                <span>下划线：</span>
                <Select
                    defaultValue="关"
                    style={{
                        width: 120,
                    }}
                    onChange={(e) => EditCb('underline',e)}
                >
                    <Option value='true'>关</Option>
                    <Option value=''>开</Option>
                </Select>
            </div>
            <div className="text-overline">
                <span>上划线：</span>
                <Select
                    defaultValue="关"
                    style={{
                        width: 120,
                    }}
                    onChange={(e) => EditCb('overline',e)}
                >
                    <Option value='true'>关</Option>
                    <Option value=''>开</Option>
                </Select>
            </div>
        </div>
    );
};

export default TextEdit;