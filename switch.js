let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}


let a = 10, b = 5;
let operator = "*";

switch (operator) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
  default:
    console.log("Invalid operator");
}



let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
    console.log("Good Job!");
    break;
  case "C":
    console.log("Well done!");
    break;
  case "D":
    console.log("You passed.");
    break;
  case "F":
    console.log("Better try again.");
    break;
  default:
    console.log("Invalid grade.");
}
