var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; },
    sayHello: function () { console.log("Hello to all"); }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; },
    sayHello: function () { return console.log("Hello again"); }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
