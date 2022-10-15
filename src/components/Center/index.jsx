import './index.scss'
import { Button } from "antd";
import 'antd/dist/antd.css';
import {fabric} from "fabric";
import {useEffect, useRef, useState} from "react";
import {nanoid} from "nanoid";

const Center = () => {

    const canvasRef = useRef(null);
    const [size,setSize] = useState([700,640])

    useEffect(() => {
        canvasRef.current = new fabric.Canvas('canvas',{
            width:700,
            height:640,
            backgroundColor:'white'
        })
        //创建一个元素
        const shape = new fabric.IText(nanoid(8),{
            text:'dududud',
            width:40,
            height:20,
            fill:'red'
        })
        canvasRef.current.add(shape)
    },[])

    return (
        <div className="center">
            <div className="hd">
                PhotoG图形编辑器
                <div className="boxs">
                    <Button>背景</Button>
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