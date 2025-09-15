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