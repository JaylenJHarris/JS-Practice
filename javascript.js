console.log('Hello World')
   
let firstName;
let lastName;
let yob;
let fullName;
const year = 2023;
let age;
document.getElementById("submitBtn").onclick = function(){

    firstName = document.getElementById('firstName').value;
    lastName = document.getElementById('lastName').value;
    yob = document.getElementById("yob").value;
    console.log(lastName);
console.log(firstName);
console.log(yob);
yob = Number(yob)
age = year - yob
fullName = firstName + " " + lastName
document.getElementById("sentence").innerHTML = "Hello " + fullName + " I see that you are " + age + " years old."
}

let Age = prompt("What is your age?", 18);


