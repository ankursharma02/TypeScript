class StaticClass
{
    static num:number

    static disp():void{
        console.log("Print the value of num " + StaticClass.num);
    }
}
StaticClass.num=25;
StaticClass.disp();