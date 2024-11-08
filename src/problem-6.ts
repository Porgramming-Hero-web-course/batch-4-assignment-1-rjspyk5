interface IProfile {
    name:string;
    age:number;
    email:string;
}
const updateProfile=(profile:IProfile,updateValue:Partial<IProfile>):IProfile=>{
   return {...profile,...updateValue}
}
