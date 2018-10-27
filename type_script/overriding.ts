class PrintClass
{
    disp2():void{
        console.log("THis is parent class");
    }
}
class StringClass extends PrintClass
{
    disp2():void{
        super.disp2()
     console.log("THis is child class")
    }
}
var obj4 = new StringClass()
obj4.disp2();