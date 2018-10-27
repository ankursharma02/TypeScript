var Car = /** @class */ (function () {
    //constructor 
    function Car() {
        this.engine = "new call";
    }
    //    constructor(engine:string) { 
    //       this.engine = engine 
    //    }  
    //function 
    Car.prototype.disp = function () {
        console.log("Engine is  :   " + this.engine);
    };
    return Car;
}());
var ca = new Car();
ca.disp();
console.log(ca.engine);
