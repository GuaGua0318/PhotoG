import {Select} from "antd";
import {useContext} from "react";
import {Context} from "../../../../utils/Context.js";

const Option = Select
const RectEdit = () => {

    const {EditCb} = useContext(Context);

    return (
        <div className="RectWrapper">
            <div className="Rect-color">
                <span>填充：</span>
                <input type='color' onChange={(e) => EditCb('fill',e.target.value)}></input>
            </div>
            <div className="Rect-strokeWidth">
                <span>边框：</span>
                <Select
                    defaultValue="12"
                    style={{
                        width: 120,
                    }}
                    onChange={(e) => EditCb('strokeWidth',e)}
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
            <div className="Rect-stroke">
                <span>边框颜色：</span>
                <input type="color" onChange={(e) => EditCb('stroke',e.target.value)}></input>
            </div>
        </div>
    );
};

export default RectEdit;