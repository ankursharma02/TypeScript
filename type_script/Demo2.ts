class Greeting { 
   greet():void { 
      console.log("Hello World!!!") 
   } 
} 
var obj1 = new Greeting(); 
obj1.greet();

var name1:string = "John"; 
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2 
console.log("name"+name1) 
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)  
var str:string='1';
var str2:number=<number><any>str;
var n=2;
console.log(n);

//n="12";
//console.log(n);
var as;
var asd:any="12";
asd=1;
console.log("name1 ",typeof name1);
console.log("score1 ",typeof score1);
console.log("score2 ",typeof score2);
console.log("sum ",typeof sum);
console.log("str  ",typeof str);
console.log("str2  ",typeof str2);
console.log("n ",typeof n);
console.log("as ",typeof as);
console.log("asd ",typeof asd );


var month = 0
if( month<=0 || month >12) { 
   month = Number.NaN 
   console.log("Month is "+ month) 
} else { 
   console.log("Value Accepted..") 
}