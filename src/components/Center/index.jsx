import './index.scss'
import { Button,Modal,Input } from "antd";
import 'antd/dist/antd.css';
import {fabric} from "fabric";
import {useEffect, useRef, useState} from "react";
import {nanoid} from "nanoid";
import baseShapeConfig from "../../utils/baseShapeConfig.js";
import {useDispatch, useSelector} from "react-redux";
import { GetType,SaveImg,HandleTplShow,SelectTpl,HandleXz,GetFile,EditCb } from "../../store/modules/ElementType.js";

const Center = () => {

    const canvasRef = useRef(null);
    const [size,setSize] = useState([700,640]);
    const [Attrs,setAttrs] = useState();
    const [imgUrl,setImgUrl] = useState('');
    const [isShow,setIsShow] = useState(false);
    const { type,isSave,Tplshow,TplId,file,attrs,xzSelect } = useSelector(state => state.ElementType)
    const dispatch = useDispatch();
    const [isTplShow,setIsTplShow] = useState(false);
    const TplNameRef = useRef(null);
    const [tpls,setTpls] = useState(() => {
        const tpls = JSON.parse(localStorage.getItem('tpls') || "{}");
        return Object.keys(tpls).map((item) => ({t:tpls[item].t,id:item}))
    })

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
            fontWeight:'1000',
            name:'text'
        });
        shape.on('selected',(e) => {
            const name = e.target.name
            dispatch(HandleXz(name))
        })
        canvasRef.current.add(shape)
    },[]);


    useEffect(() => {
        if(!type) return;
        inserElement(type);
        dispatch(GetType(''))  //向store中进行回传，如果不改变状态将无法选取相同的元素
    })

    //插入元素
    const inserElement = (type,url) => {
        let shape = null;
        switch (type){
            case 'IText':
                shape = new fabric[type](nanoid(8),{
                    ...baseShapeConfig[type],
                    left:size[0] / 3,
                    top:size[0] / 3
                })
                shape.on('selected',(e) => {
                    const name = e.target.name
                    dispatch(HandleXz(name))
                })
                break;
            case 'Rect' :
                shape = new fabric[type]({
                    ...baseShapeConfig[type],
                    left:size[0] / 3,
                    top:size[0] / 3
                })
                shape.on('selected',(e) => {
                    const name = e.target.name
                    dispatch(HandleXz(name))
                })
                break;
            case 'Line' :
                shape = new fabric[type]([
                    10, 10, // 起始点坐标
                    200, 300 // 结束点坐标
                ],{
                    stroke: '#ccc',
                    fill: 'rgba(255,255,255,0)',
                    strokeWidth: 2,
                    angle: -90,
                    objectCaching: false,
                    left: size[0] / 3,
                    top: size[1] / 3
                });
                shape.on('selected',(e) => {
                    const name = e.target.name
                    dispatch(HandleXz('line'))
                });
                break;
            case 'Circle' :
                shape = new fabric[type]({
                    ...baseShapeConfig[type],
                    left:size[0] / 3,
                    top:size[0] / 3
                });
                shape.on('selected',(e) => {
                    const name = e.target.name
                    dispatch(HandleXz(name))
                });
                break;
            case 'Triangle' :
                shape = new fabric[type]({
                    ...baseShapeConfig[type],
                    left:size[0] / 3,
                    top:size[0] / 3
                });
                shape.on('selected',(e) => {
                    const name = e.target.name
                    dispatch(HandleXz(name))
                });
                break;
            case 'Image' :
                fabric.Image.fromURL(url,(oImg) => {
                    oImg.scale(0.1);
                    oImg.on('selected',() => {
                        dispatch(HandleXz('Image'))
                    })
                    canvasRef.current.add(oImg);
                })
                return;
        }
        canvasRef.current.add(shape);
    }

    //添加图片
    useEffect(() => {
        if(file){
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                inserElement('Image', reader.result)
            };
        }
        dispatch(GetFile(''))
        // console.log(file)
    })

    useEffect(() => {
        if(attrs.length > 1){
            if(canvasRef.current.getActiveObject()){  //如果没有选中则不要在执行更新命令，
                updateAttr(attrs[0],attrs[1])         //否则会报错
            }
        }
    },[attrs])


    //更改元素属性值后更新选中元素
    const updateAttr = (type,val) => {
       setAttrs({...baseShapeConfig[xzSelect],[type]:val});
       const obj = canvasRef.current.getActiveObject();
       console.log(obj)
       obj.set({...Attrs})
       canvasRef.current.renderAll();
       console.log(obj)
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

    useEffect(() => {
        if(isSave){
            saveImg()
            dispatch(SaveImg(false))
        }
    })
    //保存图片
    const saveImg = () => {
       canvasRef.current.discardActiveObject();
       canvasRef.current.renderAll();
       download(getImgUrl(),nanoid(6) + '瓜瓜' + '.png')
    }
    const download = (url,filename,cb) => {
        return fetch(url).then((res) => res.blob().then((blob) => {
            let a = document.createElement('a');
            let url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
            cb && cb();
        }))
    }

    //保存模板
    const handleSaveTpl = () => {
        console.log('ddd')
        const val = TplNameRef.current.input.value;
        const json = canvasRef.current.toDatalessJSON();
        const id = nanoid(8);
        //存json
        const tpls = JSON.parse(localStorage.getItem('tpls') || "{}");
        tpls[id] = {json,t:val};
        localStorage.setItem('tpls',JSON.stringify(tpls));
        //存图片
        canvasRef.current.discardActiveObject();
        canvasRef.current.renderAll();
        const imgUrl = getImgUrl();
        const tplImgs = JSON.parse(localStorage.getItem('tplImgs') || "{}");
        tplImgs[id] = imgUrl;
        localStorage.setItem('tplImgs',JSON.stringify(tplImgs));
        //更新模板列表
        setTpls((prev) => [...prev, {id, t: val}])
        setIsTplShow(false)
    }
    useEffect(() => {
        if(Tplshow){
            setIsTplShow(true);
            dispatch(HandleTplShow(false));
        }
    })

    //使用模板
    const renderJson = (id) => {
        const tpls = JSON.parse(localStorage.getItem('tpls') || "{}")
        canvasRef.current.clear();
        canvasRef.current.backgroundColor = 'rgba(255,255,255,1)';
        canvasRef.current.loadFromJSON(tpls[id].json, canvasRef.current.renderAll.bind(canvasRef.current))
    }
    //使用模板
    useEffect(() => {
        if(TplId){
            renderJson(TplId);
            dispatch(() => SelectTpl(''))
        }
    })

    const closeTplModal = () => {
        setIsTplShow(false)
    }

    //切换背景色
    const hanlechangeBg = (e) => {
        canvasRef.current.backgroundColor = e;
        canvasRef.current.renderAll();
    }



    return (
        <div className="center">
            <div className="hd">
                PhotoG图形编辑器
                <div className="boxs">
                    <div className="bg-box"><input type='color' onChange={(e) => hanlechangeBg(e.target.value)}/></div>
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
            <Modal
                title="保存模版"
                open={isTplShow}
                onCancel={closeTplModal}
                onOk={handleSaveTpl}
                width={500}
                okText="确定"
                cancelText="取消"
            >
                <div>
                    <label htmlFor="">模版名称: </label>
                    <Input placeholder="请输入模版名称" ref={TplNameRef}/>
                </div>
            </Modal>
        </div>
    );
};

export default Center;