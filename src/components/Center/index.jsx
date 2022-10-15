import './index.scss'
import { Button } from "antd";
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

    useEffect(() => {
        canvasRef.current = new fabric.Canvas('canvas',{
            width:700,
            height:640,
            backgroundColor:'white',
            preserveObjectStacking:true
        })
        //创建一个元素
        const shape = new fabric.IText(nanoid(8),{
            text:'瓜瓜',
            width:20,
            height:20,
            fill:'pink',
            stroke:'green',
            fontWeight:'1000'
        })
        canvasRef.current.add(shape)
    },[]);


    useEffect(() => {
        if(type){
            inserElement(type);
        }
    })
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

    //更新选中元素
    const updateAttr = (type,val) => {
       setTextAttrs({...TextAttrs,[type]:val});
       const obj = canvasRef.current.getActiveObject();
       obj.set({...TextAttrs})
       canvasRef.current.renderAll();
    }

    return (
        <div className="center">
            <div className="hd">
                PhotoG图形编辑器
                <div className="boxs">
                    <Button onClick={() => updateAttr('fill','green')}>背景</Button>
                    <Button>清除</Button>
                    <Button>预览</Button>
                </div>
            </div>
            <div className="canvasWrapper">
                <canvas id="canvas"></canvas>
            </div>
        </div>
    );
};

export default Center;