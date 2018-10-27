class Car { 
   //field 
   engine:string; 
 
   //constructor 
   constructor()
   {
     this.engine="new call";

   }
//    constructor(engine:string) { 
//       this.engine = engine 
//    }  

   //function 
   disp():void { 
      console.log("Engine is  :   "+this.engine) 
   } 
}

var ca = new Car();
ca.disp();
console.log(ca.engine);