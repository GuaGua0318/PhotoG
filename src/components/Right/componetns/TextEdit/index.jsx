import {Select} from "antd";
import './index.scss'

const Option = Select;

const TextEdit = () => {

    const handleChange = () => {

    }

    return (
        <div className="textWrapper">
            <div className="text-color">
                <span>填充</span>
                <input type='color'></input>
            </div>
            <div className="text-size">
                <span>字号:</span>
                <Select
                    defaultValue="12"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
                >
                    <Option value="12">12</Option>
                    <Option value="14">14</Option>
                    <Option value="16">16</Option>
                    <Option value="18">18</Option>
                    <Option value="18">18</Option>
                    <Option value="18">18</Option>
                    <Option value="18">18</Option>
                </Select>
            </div>
            <div className="text-stroke">
                <span>边框：</span>
                <input type='color'></input>
            </div>
            <div className="text-strokeWidth">
                <span>边框宽度：</span>
                <Select
                    defaultValue="12"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
                >
                    <Option value="12">12</Option>
                    <Option value="14">14</Option>
                    <Option value="16">16</Option>
                    <Option value="18">18</Option>
                    <Option value="18">18</Option>
                    <Option value="18">18</Option>
                    <Option value="18">18</Option>
                </Select>
            </div>
            <div className="text-Weight">
                <span>字体宽度：</span>
                <Select
                    defaultValue="300"
                    style={{
                        width: 120,
                    }}
                    onChange={handleChange}
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
                >
                    <Option value='false'>关</Option>
                    <Option value='true'>开</Option>
                </Select>
            </div>
            <div className="text-overline">
                <span>上划线：</span>
                <Select
                    defaultValue="关"
                    style={{
                        width: 120,
                    }}
                >
                    <Option value='false'>关</Option>
                    <Option value='true'>开</Option>
                </Select>
            </div>
        </div>
    );
};

export default TextEdit;