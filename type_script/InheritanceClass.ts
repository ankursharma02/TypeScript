class Shape
{
    Area:number
    constructor(a:number)
    {
        this.Area=a
    }
}

class Circle extends Shape
{
    disp():void{
        console.log("Area of the circle: " + this.Area)
    }
}

var obj3=new Circle(25);
obj3.disp();