let car = {
  brand: "Tesla",
  color: "red",
  speed: 120,
  drive: function() {
    console.log("Car is driving...");
  }
};

console.log(car.brand);  
console.log(car["color"]);
car.drive();               



let user = { name: "Nayan", age: 22 };
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user)); 


let obj1 = { a: 1 };
let obj2 = { b: 2 };
let combined = Object.assign({}, obj1, obj2);
console.log(combined); 


let person = { name: "Alex" };
Object.freeze(person);
person.name = "John"; 
console.log(person.name); 


let student = { grade: "A" };
Object.seal(student);
student.grade = "B"; 
student.age = 20; 
console.log(student);

let book = { title: "JS Basics" };

book.author = "John Doe";

book.title = "JavaScript Advanced";


delete book.author;

console.log(book);


