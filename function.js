document.write("<h1>Functions in JavaScript</h1>")

// Function Declaration

function playGame(){
    document.write("Game is starting...<br>");
}

playGame(); // Function Call
playGame();
playGame();


// non-parameter function

function greet(){
    // let name = prompt("Enter your name: ");
    document.write("Hello,  ! Welcome to the game.<br>");
}

greet();
greet();
greet();

let globalVar = "I am a global variable";


// parameter function


function add(a, b){ //parameters a, b
    let sum = a + b;
    document.write("The sum of " + a + " and " + b + " is: " + sum + "<br>");
}


add(5,9); //arguments 5, 9
add(15,25);
add(100,200);

add(5); // NaN
add(); // NaN


add(10,20,30) // ignores 30 and adds only 10 and 20


// return function

function multiply(x, y){
    return x * y;
}

// multiply(5,6); // function call but return value is not used

let result = multiply(5,6); // function call and return value is stored in result variable

document.write("The product of 5 and 6 is: " + result + "<br>");

document.write("The product of 7 and 8 is: " + multiply(7,8) + "<br>"); // function call inside document.write


// function expression

let divide = function(p, q){
    return p / q;
}

document.write("The division of 20 by 4 is: " + divide(20,4) + "<br>");
document.write("The division of 15 by 3 is: " + divide(15,3) + "<br>");



// arrow function

let divideArrow = (m, n) => m/n;






let addArrow =  (x, y) => x+y;

document.write("The sum of 10 and 20 is: " + addArrow(10,20) + "<br>");
document.write("The sum of 15 and 25 is: " + addArrow(15,25) + "<br>");


let greetArrow = ( ) => document.write("Hello, ! Welcome to the game.<br>");

greetArrow();

document.write("The divisionArrow of 30 by 5 is: " + divideArrow(30,5) + "<br>");
document.write("The division of 45 by 9 is: " + divideArrow(45,9) + "<br>");

// anonymous function -- function without a name


// setTimeout(function() {
//     document.write("This message is shown after 3 seconds.<br>");
// }, 3000);


// setTimeout( () => document.write("This message is shown after 3 seconds.<br>"), 3000);


// IIFE -- Immediately Invoked Function Expression

(function() {
    document.write("This message is shown immediately.<br>");
})();


(() => document.write("This message is shown immediately using arrow function.<br>"))();



// table function

function table(num){
    document.write("<h3>Table of " + num + "</h3>");        

    for(let i=1; i<=10; i++){
        document.write(num + " x " + i + " = " + (num*i) + "<br>");
    }       
    document.write("<br>");
}   

table(5);

table(8);

table(12);


// even odd 0 function

let evenOdd = (num) =>{
    if(num === 0){
        document.write(num + " is zero.<br>");
    }
    else if(num % 2 === 0){
        document.write(num + " is an even number.<br>");
    }
    else{
        document.write(num + " is an odd number.<br>");
    }
}

evenOdd(0);
evenOdd(7);
evenOdd(10);
evenOdd(15);

// evenOdd(prompt("Enter a number: "));


// recursive function


function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    else{
        return n * factorial(n-1); // recursive call
    }
}

let num = 5;
document.write("The factorial of " + num + " is: " + factorial(num) + "<br>");


// 5! = 5 * 4!
// 4! = 4 * 3!
// 3! = 3 * 2!
// 2! = 2 * 1!
// 1! = 1

// 5! = 5 * 4 * 3 * 2 * 1 = 120


// Fibonacci series using recursion

// 0 1 1 2 3 5 8 13 21 34 55 ...

function fibonacci(n){      
    if(n === 0){
        return 0;
    }       
    else if(n === 1){
        return 1;
    }   
    else{
        return fibonacci(n-1) + fibonacci(n-2); // recursive call
    }       
}

let terms = 10;
document.write("Fibonacci series up to " + terms + " terms:<br>");


for(let i=0; i<terms; i++){
    document.write(fibonacci(i) + " ");
}

document.write("<br>");

// 0 1 1 2 3 5 8 13 21 34 55 ...
// f(0) = 0
// f(1) = 1
// f(2) = f(1) + f(0) = 1 + 0 = 1
// f(3) = f(2) + f(1) = 1 + 1 = 2
// f(4) = f(3) + f(2) = 2 + 1 = 3               

// f(5) = f(4) + f(3) = 3 + 2 = 5       
// f(6) = f(5) + f(4) = 5 + 3 = 8
// f(7) = f(6) + f(5) = 8 + 5 = 13
// f(8) = f(7) + f(6) = 13 + 8 = 21
// f(9) = f(8) + f(7) = 21 + 13 = 34
// f(10) = f(9) + f(8) = 34 + 21 = 55


// scope in JavaScript

// global scope


function showGlobalVar(){
    document.write(globalVar + "<br>"); // accessible
}

showGlobalVar();


function anotherFunction(){
    document.write(globalVar + "<br>"); // accessible
}

anotherFunction();

// function scope

function functionScope(){
    let functionVar = "I am a function variable";
    document.write(functionVar + "<br>"); // accessible
    if(true){
       document.write(functionVar + " inside the condition" + "<br>"); // accessible
    }
}

functionScope();

// document.write(functionVar + "<br>"); // not accessible, error

document.write("<br> <br>");



// block scope

let blockVar = "I am a block variable declared outside";

function blockScope(){
    let blockVar = "I am a block variable inside function";

    if(true){
        let blockVar = "I am a block variable declared with let inside block"; // block scoped
        // var blockVar2 = "I am a block variable declared with var inside block"; // function scoped
        document.write(blockVar + "<br>"); // accessible
        // document.write(blockVar2 + "<br>"); // accessible
    }       
    document.write(blockVar + "<br>"); // not accessible, error
    // document.write(blockVar2 + "<br>"); // accessible, var is function scoped
}



blockScope();


document.writeln(blockVar + " outside" + "<br>"); // accessible











// document.write(blockVar + "outside" + "<br>"); // not accessible, error
// document.write(blockVar2 + "outside" +  "<br>"); // not accessible, error


// hoisting in JavaScript



hoistedFunction(); // function call before declaration, works due to hoisting

function hoistedFunction(){
    document.write("This function is hoisted.<br>");
}


// hoistedFunctionExpression(); // error, function expression is not hoisted

let hoistedFunctionExpression = function(){
    document.write("This function expression is not hoisted.<br>");
}       

hoistedFunctionExpression(); // works, function call after declaration

// hoistedArrowFunction(); // error, arrow function is not hoisted

let hoistedArrowFunction = () => {
    document.write("This arrow function is not hoisted.<br>");
}


// hoistedArrowFunction(); // works, function call after declaration

// parameter function hoisting

hoistedParamFunction(5,10); // works, function call before declaration

function hoistedParamFunction(a, b){
    document.write("The sum of " + a + " and " + b + " is: " + (a+b) + "<br>");
}


// variable hoisting

document.write("The value of hoistedVar is: " + hoistedVar + "<br>"); // undefined due to hoisting


var hoistedVar = "I am a hoisted variable";

// only the declaration is hoisted, not the initialization


// let and const are not hoisted

// document.write("The value of hoistedLet is: " + hoistedLet + "<br>"); // error, let is not hoisted

// let hoisted = "I am not hoisted but I am declared";

// document.write("The value of hoistedLet is: " + hoistedLet + "<br>"); // works, let is declared

// const hoistedConst = "I am not hoisted but I am declared";



// lexical scope

let outerVar = "I am an outer variable";

function outerFunction(){
    let outerFunctionVar = "I am a variable in outer function";     
    document.write(outerVar + "<br>"); // accessible
    document.write(outerFunctionVar + "<br>"); // accessible        
    function innerFunction(){
        let innerFunctionVar = "I am a variable in inner function";
        document.write(outerVar + "<br>"); // accessible
        document.write(outerFunctionVar + "<br>"); // accessible
        document.write(innerFunctionVar + "<br>"); // accessible
    }       
    innerFunction();
    // document.write(innerFunctionVar + "<br>"); // not accessible, error
}   
outerFunction();

// document.write(outerFunctionVar + "<br>"); // not accessible, error
// document.write(innerFunctionVar + "<br>"); // not accessible, error  


// clousere in JavaScript


function outer(){
    let count = 0;  
    return function inner(){
        count++;
        document.write("Count is: " + count + "<br>");
    }   
}

let counter = outer(); // counter is a closure
counter();
counter();
counter();