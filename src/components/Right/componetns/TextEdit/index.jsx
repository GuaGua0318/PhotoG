import {Select,InputNumber} from "antd";
import './index.scss'
import {useDispatch} from "react-redux";
import {EditCb} from "../../../../store/modules/ElementType.js";

const Option = Select;
const TextEdit = () => {

    const dispatch = useDispatch();

    return (
        <div className="textWrapper">
            {/*<div className="text-color">*/}
                <span>填充:</span>
                <input type='color' onChange={(e) => dispatch(EditCb(['fill',e.target.value]))}></input>
            {/*</div>*/}
            {/*<div className="text-stroke">*/}
                <span>边框色：</span>
                <input type='color' onChange={(e) => dispatch(EditCb(['stroke',e.target.value]))}></input>
            {/*</div>*/}
            {/*<div className="text-stroke">*/}
                <span>背景色：</span>
                <input type='color' onChange={(e) => dispatch(EditCb(['backgroundColor',e.target.value]))}></input>
            {/*</div>*/}
            {/*<div className="text-strokeWidth">*/}
                <span>边框宽度：</span>
                <InputNumber size="small" min={1} style={{width: 60}} onChange={(e) => dispatch(EditCb(['strokeWidth', e]))} />
            {/*</div>*/}
            {/*<div className="text-Weight">*/}
                <span>字体宽度：</span>
                <InputNumber size="small" min={1} style={{width: 60}} onChange={(e) => dispatch(EditCb(['strokeWidth', e]))} />
            {/*</div>*/}
            {/*<div className="text-underline">*/}
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
            {/*</div>*/}
            {/*<div className="text-overline">*/}
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
            {/*</div>*/}
        </div>
    );
};

export default TextEdit;