import './index.scss'
import {Button, Tooltip,} from "antd";
import { createFromIconfontCN } from '@ant-design/icons';
import TextEdit from "./componetns/TextEdit/index.jsx";

const IconFont = createFromIconfontCN({
    scriptUrl: 'https://at.alicdn.com/t/c/font_3707966_7isnltzp05v.js',
});

const Right = (props) => {


    return (
        <div className="right">
            <div className="edit">
                <p>属性编辑</p>
                {/*<TextEdit/>*/}

            </div>
            <div className="add">
                <p>添加元素</p>
                <div className="add-wrapper">
                    <div className="shape" onClick={() => {props.typeCb('IText')}}>
                        <Tooltip title='添加文本'>
                            <div className="text">
                                <IconFont type="icon-text" style={{fontSize:'30px'}}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="shape">
                        <Tooltip title='添加矩形'>
                            <div className="rect" onClick={() => {props.typeCb('Rect')}}>
                                <IconFont type="icon-juxing" style={{fontSize:'30px'}}/>
                            </div>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="boxs">
                <div className="saveImg">
                    <Button type='primary' block>保存图片</Button>
                </div>
                <div className="saveTemplate">
                    <Button type='primary' block>保存模板</Button>
                </div>
            </div>
        </div>
    );
};

export default Right;