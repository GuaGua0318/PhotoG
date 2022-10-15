import './index.scss'
import { Button,Modal } from "antd";
import 'antd/dist/antd.css';
import {fabric} from "fabric";
import {useEffect, useRef, useState} from "react";
import {nanoid} from "nanoid";
import baseShapeConfig from "../../utils/baseShapeConfig.js";

const Center = (props) => {

    const canvasRef = useRef(null);
    const [size,setSize] = useState([700,640]);
    const [TextAttrs,setTextAttrs] = useState({...baseShapeConfig['IText']})  //文本
    const type = props.type;
    const attrs = props.attrs;
    const [imgUrl,setImgUrl] = useState('');
    const [isShow,setIsShow] = useState(false);

    useEffect(() => {
        canvasRef.current = new fabric.Canvas('canvas',{
            width:700,
            height:640,
            backgroundColor:'white',
            preserveObjectStacking:true
        })
        // 自定义删除按钮
        const deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";

        const img = document.createElement('img');
        img.src = deleteIcon;

        //删除方法
        fabric.Object.prototype.controls.deleteControl = new fabric.Control({
            x: 0.5,
            y: -0.5,
            offsetY: -32,
            cursorStyle: 'pointer',
            mouseUpHandler: deleteObject,
            render: renderIcon,
            cornerSize: 24
        });
        function deleteObject(eventData, transform) {
            const target = transform.target;
            const canvas = target.canvas;
            canvas.remove(target);
            canvas.requestRenderAll();
        }
        function renderIcon(ctx, left, top, styleOverride, fabricObject) {
            const size = this.cornerSize;
            ctx.save();
            ctx.translate(left, top);
            ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
            ctx.drawImage(img, -size/2, -size/2, size, size);
            ctx.restore();
        }

        //创建一个元素
        const shape = new fabric.IText(nanoid(8),{
            text:'瓜瓜',
            width:20,
            height:20,
            fontSize:28,
            fill:'pink',
            stroke:'green',
            fontWeight:'1000'
        })
        canvasRef.current.add(shape)
        console.log('ddd')
    },[]);


    useEffect(() => {
        if(type){
            inserElement(type);
        }
    },[type])
    //插入元素
    const inserElement = (type) => {
        let shape = null;
        switch (type){
            case 'IText':
                shape = new fabric[type](nanoid(8),{
                    ...baseShapeConfig[type],
                    left:size[0] / 3,
                    top:size[0] / 3
                })
                break;
            case 'Rect' :
                shape = new fabric[type]({
                    ...baseShapeConfig[type],
                    left:size[0] / 3,
                    top:size[0] / 3
                })
                break;
        }
        canvasRef.current.add(shape);
    }

    useEffect(() => {
        if(attrs){
            if(canvasRef.current.getActiveObject()){  //如果没有选中则不要在执行更新命令，
                updateAttr(attrs[0],attrs[1])         //否则会报错
            }

        }
    },[attrs])

    //更改元素属性值后更新选中元素
    const updateAttr = (type,val) => {
       setTextAttrs({...TextAttrs,[type]:val});
       const obj = canvasRef.current.getActiveObject();
       obj.set({...TextAttrs})
       canvasRef.current.renderAll();
    }

    //清空画布
    const clear = () => {
        canvasRef.current.clear();
    }

    // 预览
    const handlePreview = () => {
        canvasRef.current.discardActiveObject()
        canvasRef.current.renderAll();
        setImgUrl(getImgUrl)
        setIsShow(true)
    }
    const getImgUrl = () => {
        const img = document.getElementById("canvas");
        const src = img.toDataURL("image/png");
        return src
    }
    //关闭预览
    const closeModal = () => {
        setIsShow(false)
    }

    return (
        <div className="center">
            <div className="hd">
                PhotoG图形编辑器
                <div className="boxs">
                    <Button>背景</Button>
                    <Button onClick={() => clear()}>清除</Button>
                    <Button onClick={() => handlePreview()}>预览</Button>
                </div>
            </div>
            <div className="canvasWrapper">
                <canvas id="canvas"></canvas>
            </div>
            <Modal title="预览图片" open={isShow} footer={null} onCancel={closeModal} width={size[0]}>
                <img src={imgUrl} alt="" style={{width: '100%'}} />
            </Modal>
        </div>
    );
};

export default Center;