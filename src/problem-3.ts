type countword=(sentence:string,word:string)=>number;


const countWordOccurrences:countword=(sentence,word)=>{
const wordsArr:string[]=sentence?.toLowerCase().split(" ")
 const result:string[]=wordsArr.filter((el:string)=> el ===word)
 return result.length
}
