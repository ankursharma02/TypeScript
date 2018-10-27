function employee(id:number,name:string)
{
    this.id=id;
    this.name=name;
}
var emp = new employee(1,"Krishna");
employee.prototype.email="krishdubey95@gmail.com"

console.log("Employee 's Id: "+emp.id) 
console.log("Employee's name: "+emp.name) 
console.log("Employee's Email ID: "+emp.email)