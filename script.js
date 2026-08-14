console.log("javascript is connected");


const cvbutton = document.getElementById("cvbutton");

cvbutton.addEventListener("click", function(){
    const cv = document.createElement("a");

    cv.href= "";
    cv.download= "";

    cv.click();

});

// VARIABLES
let name = "Gani";
let age = 20;
let isdeveloper = true;
let profession = "A WEB DEVELOPER";

// DATA TYPES
console.log(typeof name);
console.log(typeof age);
console.log(typeof isdeveloper);
console.log(typeof profession);

// ARRAY
let skills = ["HTML","CSS","JAVASCRIPT"];
console.log(skills[1]);

// ARITHMETIC OPERATORS
let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


// COMPARISON OPERATORS
console.log(a > b);
console.log(a < b);
console.log(a === b);
console.log(a !== b)

// CONDITIONAL STATEMENTS (IF...ELSE)
if (age>=18) {

    console.log("you are an adult");

} else {

    console.log("you are under age");
}

 // FUNCTIONS
 function greet(name)  {

    console.log("hello"+ name);
 }
  
greet("gani");
greet("samuel");

// LOOPS
for (let i = 1; i<=5;i++) {

     console.log(i);
    
}


for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// loops vs array
let fruits = ["apple","mango","orange","banana"];

for (let i = 0; i < fruits.length; i++) {

    console.log(fruits[i]);
}

let cars = ["Toyota", "Honda", "BMW", "Mercedes"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

 cars = ["Toyota", "Honda", "BMW", "Mercedes"];

for (let i = cars.length - 1; i >= 0; i--) {
    console.log(cars[i]);
}

// Using a for loop and if statement to print even numbers from an array

let numbers = [1 , 2, 3 , 4, 5, 6];
  
for (let i = 0; i < numbers.length; i++) {

      if(numbers [i] % 2 === 0) {

        console.log(numbers[i]);

      }
}

// Print odd numbers from an array
numbers = [1 , 2, 3 , 4, 5, 6];
  
for (let i = 0; i < numbers.length; i++) {

      if(numbers [i] % 2 !== 0) {

        console.log(numbers[i]);

      }
}

// Use a while loop to print numbers from 1 to 5
let i = 1;
  
while (i <= 5 ) {
    console.log(i); 
     i++;
}

// Use a while loop to count down from 5 to 1
 i = 5;

while (i >= 1) {
    console.log(i);
    i--;
}
   
      // DOM MANIPULATION

const title = document.getElementById("title");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", function() {
    title.textContent = "Hello Gani!";
});

    // CHANGING CSS WITH JAVASCRIPT

const changeStyleBtn = document.getElementById("changeStyleBtn");

changeStyleBtn.addEventListener("click", function() {
    title.style.color = "orange";
    title.style.fontSize = "40px";
    title.style.backgroundColor = "black";

});

// JAVASCRIPT EVENTS

const hoverBtn = document.getElementById("hoverBtn");

hoverBtn.addEventListener("mouseover", function() {
    hoverBtn.style.backgroundColor = "black";
    hoverBtn.style.color = "white";
});

// MOUSEOUT EVENT

hoverBtn.addEventListener("mouseout", function() {
    hoverBtn.style.backgroundColor = "";
    hoverBtn.style.color = "";
});


// KEYBOARD EVENTS

const nameInput = document.getElementById("nameInput");
const output = document.getElementById("output");

nameInput.addEventListener("input", function() {
    output.textContent = nameInput.value;
});

const colorBtn = document.getElementById("colorBtn");

colorBtn.addEventListener("click", function() {
    output.style.color = "red";
});

const styleBtn = document.getElementById("styleBtn");

styleBtn.addEventListener("click", function() {
    output.style.color = "blue";
    output.style.fontSize = "30px";
    output.style.backgroundColor = "lightgray";
});

const message = document.getElementById("message");
const hideBtn = document.getElementById("hideBtn");
const showBtn = document.getElementById("showBtn");

hideBtn.addEventListener("click", function() {
    message.style.display = "none";
});

showBtn.addEventListener("click", function() {
    message.style.display = "block";
});

const myImage = document.getElementById("myImage");
const changeImageBtn = document.getElementById("changeImageBtn");

changeImageBtn.addEventListener("click", function() {
    myImage.src = "images/image.2/sammy.png";
});


const myLink = document.getElementById("myLink");
const changeLinkBtn = document.getElementById("changeLinkBtn");

changeLinkBtn.addEventListener("click", function() {
    myLink.href = "https://www.youtube.com";
    myLink.textContent = "Visit YouTube";
});


const myForm = document.getElementById("myForm");
const username = document.getElementById("username");
const email = document.getElementById("email");



myForm.addEventListener("submit", function(event) {
    event.preventDefault();

    result.textContent = "Hello " + username.value + ", your email is " + email.value;
});

function introduce (name,profession) {
    console.log("my name is " + name);
    console.log("i am " + profession);

}

introduce("gani","web developer");


 
function add(a, b) {
    return a + b;

}

 let result = add(10,5);

 console.log(result);

 function multiple(a, b) {
    return a * b;

 }
 
  result = multiple(10,5);

 console.log(result);

 