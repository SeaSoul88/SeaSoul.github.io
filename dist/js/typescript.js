var nameTs = "Elizaveta";
var ageTs = 35;
var isAdminTs = false;
var isStudentTs = true;
var und = undefined;
und = undefined;
var nullTS = null;
nullTS = null;
//Массив 
var fruitsTS = ["apple", "orange", "peech"];
// let fruitsTS2 : Array<string> = ["apple", "orange", "peech"]
var agesTs = [5, 10, 18];
agesTs.push(22);
var firstAge = ageTs[0];
var firstFruit = fruitsTS[0];
//объекты
var studentTs = {
    name: "Student",
    age: 19,
    isAdmin: true,
};
var studentName = studentTs.name; //string
var student3Ts = {
    name: "Vasiliy",
    age: 20,
    isAdmin: false,
};
var university = {
    name: "uni",
    students: [student3Ts]
};
//функция 
function sum(a, b) {
    return a + b;
}
console.log("result:", sum(5, 5));
