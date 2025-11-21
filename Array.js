
let cityList = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Surat"];

console.log(cityList);

// let upperCityList = [];
// for(let i=0; i<cityList.length; i++){
//     upperCityList.push( cityList[i].toUpperCase() );
// }

// console.log(upperCityList);


// mapping the array

let newcityList = cityList.map((city) => {
    return city.toUpperCase();
});

console.log(newcityList);


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let squareNum = numbers.map((num) => num * 2);
console.log(squareNum);


let productName = ["Mobile", "Laptop", "Tablet", "Monitor", "Mouse", "Keyboard"];

let updatedProductName = productName.map((item) => item + " - 2025");
console.log(updatedProductName);



// filtering the array


let numbers2 = [12, 45, 67, 23, 89, 90, 34, 22, 10, 5, 3, 78, 56];

// let evenArray = [];
// for(let i=0; i<numbers2.length; i++){
//     if(numbers2[i]%2 === 0){
//         evenArray.push(numbers2[i]);
//     }
// }
// console.log(evenArray);


let evenArray = numbers2.filter((num) => num % 2 === 0);
console.log(evenArray);


let oddArray = numbers2.filter((num) => num % 2 !== 0);
console.log(oddArray);


// reduce the array


let number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// let sum = 0;
// for(let i=0; i<number3.length; i++){
//     sum = sum + number3[i];
// }
// console.log(sum);


let total = number3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(total);


let emptyArray = [];

// let emptyArray2 = emptyArray.map( (item) => item*2 );
// console.log(emptyArray2);
// document.write(emptyArray2);


// fill the array

let fillArray = new Array(10).fill("Hello World");
console.log(fillArray);


// join the array

let joinArray = ["Hello", "World", "This", "is", "Javascript"];

let joinString = joinArray.join(" ");
console.log(joinString);

let splitArray = joinString.split(" ").reverse();
console.log(splitArray);

let finalString = splitArray.join(" ");

console.log(finalString);


// Array destructuring

let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

console.log(fruits[0]);

let [fruit1, fruit2, fruit3, fruit4, fruit5] = fruits;

console.log(fruit1);
console.log(fruit3);


// skipping values in destructuring

let [f1, , f3, , f5] = fruits;

console.log(f1);
console.log(f3);
console.log(f5);


// rest operator in Array
let [firstFruit, secondFruit, ...otherFruits] = fruits;

console.log(firstFruit);
console.log(secondFruit);
console.log(otherFruits);

// spread operator in Array

let vegies = ["Carrot", "Potato", "Tomato"];

let foodItems = [...fruits, ...vegies];
console.log(foodItems);




