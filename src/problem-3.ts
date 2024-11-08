const countWordOccurrences=(sentence:string,word:string):number=>{
const wordsArr:string[]=sentence?.toLowerCase().split(" ")
 const result:string[]=wordsArr.filter((el:string)=> el ===word)
 return result.length

}
