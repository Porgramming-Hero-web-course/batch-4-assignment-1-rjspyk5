const validateKey=<T>(obj: T, keys: keyof T[]):boolean=>{

return keys.every((el:string)=>el in obj)

}