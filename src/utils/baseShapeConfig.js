const baseShapeConfig = {
    //可编辑文本
    IText:{
        text:'瓜瓜',
        width:20,
        height:20,
        fill:'pink',
        name:'text'
    },
    //矩形
    Rect:{
        width: 30,
        height: 30,
        fill: 'red',
        name:'rect'
    },
    //圆形
    Circle:{
        radius:50,
        fill:'green',
        name:'circle'
    },
    //三角形
    Triangle:{
        fill:'pink',
        width:100,
        height:100,
        name:'triangle'
    },
    //线段
    Line: {
        width: 100,
        height: 1,
        fill: '#06c',
        name:'line'
    },
    //图片
    Image:{}
}
export default baseShapeConfig;