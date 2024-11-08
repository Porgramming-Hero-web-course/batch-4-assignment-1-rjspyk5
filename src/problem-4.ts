type Circle={shape:"circle",radius:number};
type Rectangle={shape:"rectangle",width:number,height:number}

const calculateShapeArea=(details:Circle | Rectangle):number=>{

if ("radius" in details) {
    return parseFloat((Math.PI*(details?.radius*details?.radius)).toFixed(2))
}
if ("width" in details && "height" in details) {
    return parseFloat((details?.height*details?.width).toFixed(2));
}
return 0;
}


