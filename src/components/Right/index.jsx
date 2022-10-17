import './index.scss'
import {Button, Tooltip, Upload,} from "antd";
import { createFromIconfontCN } from '@ant-design/icons';
import TextEdit from "./componetns/TextEdit/index.jsx";
import RectEdit from "./componetns/RectEdit/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import { GetType,SaveImg,HandleTplShow,GetFile } from '../../store/modules/ElementType.js'
import {useEffect} from "react";

const IconFont = createFromIconfontCN({
    scriptUrl: 'https://at.alicdn.com/t/c/font_3707966_mwmmu0ojqs.js',
});

const Right = () => {

    const dispatch = useDispatch();
    const { xzSelect } = useSelector(state => state.ElementType);
     const props = {
         action: '',
         beforeUpload(file) {
             return new Promise(resolve => {
                 dispatch(GetFile((file)))
                 // const reader = new FileReader();
                 // reader.readAsDataURL(file);
                 // reader.onload = () => {
                 //     insertElement('Image', reader.result || logo)
                 // };
             });
         },
     };

    return (
        <div className="right">
            <div className="edit">
                <p>属性编辑</p>
                {
                    xzSelect === 'text' ? <TextEdit/> : <RectEdit/>
                }
                {/*<TextEdit/>*/}
                {/*<RectEdit/>*/}
            </div>
            <div className="add">
                <p>添加元素</p>
                <div className="add-wrapper">
                    <div className="shape">
                        <Tooltip title='添加文本'>
                            <div className="text" onClick={() => dispatch(GetType('IText'))}>
                                <IconFont type="icon-text" style={{fontSize:'30px'}}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="shape">
                        <Tooltip title='添加矩形'>
                            <div className="rect" onClick={() => dispatch(GetType('Rect'))}>
                                <IconFont type="icon-juxing" style={{fontSize:'30px'}}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="shape">
                        <Tooltip title='添加圆形'>
                            <div className="circle" onClick={() => dispatch(GetType('Circle'))}>
                                <IconFont type="icon-circle" style={{fontSize:'30px'}}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="shape">
                        <Tooltip title='添加三角形'>
                            <div className="triangle" onClick={() => dispatch(GetType('Triangle'))}>
                                <IconFont type="icon-sanjiaoxing" style={{fontSize:'30px'}}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="shape">
                        <Tooltip title='添加线段'>
                            <div className="line" onClick={() => dispatch(GetType('Line'))}>
                                <IconFont type="icon-xiantiao" style={{fontSize:'30px'}}/>
                            </div>
                        </Tooltip>
                    </div>
                    <div className="shape">
                        <Tooltip title='添加图片'>
                            <Upload {...props}>
                                <div className="image">
                                    <IconFont type="icon-tupian" style={{fontSize:'30px'}}/>
                                </div>
                            </Upload>
                        </Tooltip>
                    </div>
                </div>
            </div>
            <div className="boxs">
                <div className="saveImg"  onClick={() => dispatch(SaveImg(true))}>
                    <Button type='primary' block>保存图片</Button>
                </div>
                <div className="saveTemplate" onClick={() => dispatch(HandleTplShow(true))}>
                    <Button type='primary' block>保存模板</Button>
                </div>
            </div>
        </div>
    );
};

export default Right;