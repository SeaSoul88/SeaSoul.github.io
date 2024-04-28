let nameTs : string = "Elizaveta";
let ageTs : number = 35;
let isAdminTs : boolean = false;
let isStudentTs : boolean = true;

let und : undefined = undefined;
und = undefined;

let nullTS : null = null;
nullTS = null;

//Массив 
let fruitsTS : string [] = ["apple", "orange", "peech"];
// let fruitsTS2 : Array<string> = ["apple", "orange", "peech"]
const agesTs : number[] = [5, 10, 18]
 
agesTs.push(22)

let firstAge = ageTs[0]
let firstFruit = fruitsTS[0]

//объекты
const studentTs: {
  name : string,
  age : number,
  isAdmin: boolean,
} = {
  name : "Student",
  age : 19,
  isAdmin : true,
};

let studentName = studentTs.name; //string

//Интерфейсы
interface Student {
	name: string;
	age: number;
	isAdmin: boolean;
}


const student3Ts: Student = {
	name: "Vasiliy",
	age: 20,
	isAdmin: false,
}

interface University {
  name : string;
  students : Student [];
}

const university : University = {
  name:  "uni",
  students: [student3Ts]
}

//функция 
function sum(a : number, b : number) {
  return a + b
}
console.log("result:", sum(5, 5))
