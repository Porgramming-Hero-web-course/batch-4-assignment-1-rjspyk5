const validateKeys=<T extends object>(obj: T, keys: (keyof T)[]):boolean=>{
return keys.every((el)=>el in obj)

}
