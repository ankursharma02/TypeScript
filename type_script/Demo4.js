function disp_details(id, name, mail_id) {
    console.log("ID:", id);
    console.log("Name", name);
    if (mail_id != undefined)
        console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");
disp_details(12121, "aankur");
function addnumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    console.log("Sum of param is ");
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log("total =", sum);
}
addnumbers(1, 2, 2, 2, 2, 2, 2, 2, 2, 333, 32);
addnumbers(2, 2, 2, 11, 11, 12);
var foo = function (x) {
    x = 10 + x;
    console.log(x);
};
foo(100);
var v = new Number();
console.log(Number.MAX_VALUE);
var arr;
arr = new Array(3);
for (var i = 0; i < arr.length; i++)
    arr[i] = i + 1;
console.log(arr.length);
var a = arr[0], b = arr[1], c = arr[2];
console.log("a " + a + " b= " + b + " c= " + c);
//aray destructuring
var str1 = new String("This is beautiful string");
var index = str1.localeCompare("232");
console.log("localeCompare first :" + index);
function isBigEn(e, i, a) {
    return (e > 10);
}
var res1 = [11, 12, 13, 14, 15, 1, 4, 9].every(isBigEn);
console.log("res1 " + res1);
var rest2 = [11, 33, 2, 31, 31, 31, 3].filter(function (e) { return e <= 10; });
console.log(rest2);
rest2.forEach(function (e) { return console.log(e); });
var arr1 = ["asd", "xyz", "abc"];
var str = arr1.join();
console.log("str : " + str);
var res3 = [1, 4, 9, 2, 5];
var r = res3.map(Math.sqrt);
r.forEach(function (e) { return console.log(e); });
var s;
s = 11;
console.log("numeric s ", s);
s = "asd";
console.log("String s ", s);
