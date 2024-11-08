type Circle={shape:"circle",radius:number};
type Rectangle={shape:"rectangle",width:number,height:number}

const calculateShapeArea=(details:Circle | Rectangle):number=>{

if (details?.shape==="circle") {
    return parseFloat((Math.PI*(details?.radius*details?.radius)).toFixed(2))
}
if (details?.shape==="rectangle") {
    return parseFloat((details?.height*details?.width).toFixed(2));
}
return 0;
}

console.log(calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  })
);
