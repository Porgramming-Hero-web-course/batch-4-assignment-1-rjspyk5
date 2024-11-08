const removeDuplicates=(nums:number[]):number[]=>{
    const newArr:number[]=[];
    nums.forEach((el:number) => {
        console.log(el);
        !(newArr.includes(el)) && newArr.push(el);
    });
    return newArr;
}
