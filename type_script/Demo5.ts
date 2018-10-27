interface IPerson { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string,
   sayHello() 
} 

var customer:IPerson = { 
   firstName:"Tom",
   lastName:"Hanks", 
   sayHi: ():string =>{return "Hi there"},
   sayHello(){console.log("Hello to all")} 
} 

console.log("Customer Object ") 
console.log(customer.firstName) 
console.log(customer.lastName) 
console.log(customer.sayHi())  
console.log(customer.sayHello())  

var employee:IPerson = { 
   firstName:"Jim",
   lastName:"Blakes", 
   sayHi: ():string =>{return "Hello!!!"} ,
   sayHello:()=>console.log("Hello again")
} 
  
console.log("Employee  Object ") 
console.log(employee.firstName)
console.log(employee.lastName)
console.log(employee.sayHello())
console.log(employee.sayHi())