interface IProfile {
    name:string;
    age:number;
    email:string;
}

const updateProfile=(profile:IProfile,updateValue:Partial<IProfile>):IProfile=>{
   return {...profile,...updateValue}
}

console.log(updateProfile({ name: "Alice", age: 25, email: "alice@example.com" },{age:59}));