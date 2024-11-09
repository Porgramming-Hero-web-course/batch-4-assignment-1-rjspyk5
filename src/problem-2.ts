type removeDuplicatesType=(nums:number[])=>number[]

const removeDuplicates:removeDuplicatesType=(nums)=>{
    const newArr:number[]=[];
    nums.forEach((el:number) => {
        !(newArr.includes(el)) && newArr.push(el);
    });
    return newArr;
}
