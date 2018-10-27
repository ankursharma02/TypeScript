var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():number { 
      var local_num = 14;
      return local_num;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 
console.log(obj.storeNum());
var x:number=3;
var y=-x;
var res=(x>=4?"x is greater then 4 ":"x is less then 4");
console.log("res=",res);
console.log("x=",x);
console.log("y= ",y);


