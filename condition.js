// conditional statements in JavaScript

// if statement


let list = [
    {name: "John", age: 30, city: "New York"},
    {name: "Jane", age: 25, city: "Los Angeles"},
    {name: "Mike", age: 35, city: "Chicago"},
    {name: "Emily", age: 18, city: "Houston"},
    {name: "David", age: 32, city: "Phoenix"},
    {name: "Sarah", age: 22, city: "Philadelphia"},
    {name: "Chris", age: 17, city: "San Antonio"},
    {name: "Anna", age: 29, city: "San Diego"},
    {name: "Tom", age: 11, city: "Dallas"},
    {name: "Laura", age: 26, city: "San Jose"},
    {name: "James", age: 13, city: "Austin"},
    {name: "Linda", age: 24, city: "Jacksonville"},
    {name: "Robert", age: 34, city: "Fort Worth"},
    {name: "Patricia", age: 21, city: "Columbus"},
    {name: "Michael", age: 36, city: "Charlotte"}
];


for (let i = 0; i < list.length; i++){
    if (list[i].age >= 18) {
        document.write(list[i].name + " from " + list[i].city + " is eligible to vote .<br>")  
    }
    else {
        document.write(list[i].name + " from " + list[i].city + " is not eligible to vote.<br>")  
    }



}    






let age = 14;


if (age >= 18) {
    document.write("You are eligible to vote.<br>")
}
else {
    document.write("You are not eligible to vote.<br>")
}



let num =  8;

if (num % 2 == 0) {
    document.write(num + " is an even number.<br>")
}
else {
    document.write(num + " is an odd number.<br>")
}



// else if statement

let num2 = "mohit";
if(typeof num2 !== 'number'){
    document.write("Invalid input.<br>")
}
else if(num2 === 0){
    document.write(num2 + " is zero.<br>")
}
else if (num2 % 2 === 0) {
    document.write(num2 + " is an even number.<br>")
}

else if(num2 % 2 !== 0 ) {
    document.write(num2 + " is an odd number.<br>")
}
else{
    document.write("Invalid input.<br>")
}



// switch statement

let day = 5;
let dayName;    

switch (day) {
    case 1:
        dayName = "Monday";         
        break;  
    case 2:
        dayName = "Tuesday";         
        break;      
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;  
    case 5:
        dayName = "Friday";
        break;                  
    case 6:
        dayName = "Saturday";
        break;                                  
    case 7:
        dayName = "Sunday";
        break;          
    default:
        dayName = "Invalid day";         
        break;
}

document.write("Today is " + dayName + ".<br>")