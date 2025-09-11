
// loop 

// for loop

// for ("initialization"; "condition"; "increment/decrement") {
//     // code to be executed
// }


// for (let i = 1; i <= 100; i++){
//     document.write(i + "<br>")
// }


// for (let i = 100; i >= 1; i--){
//     document.write(i + "<br>")
// }

// table 0f  5


// for (let i = 1; i <= 10; i++){
//     document.write("5 x " + i + " = " + (5 * i) + "<br>")
// }

// for (let i = 0; i <= 10; i++){
//     document.write(i  + "<br>")
// }

// while loop

// while (condition) {
//     // code to be executed
// }

// let i = 5
// while (i <= 4) {
//     document.write(i + "<br>")
//     i++
// }


// do while loop

// do {
//     // code to be executed
// } while (condition);

// let j = 5
// do {
//     document.write(j + "<br>")
//     j++
// } while (j <= 4)



// let arr = [2, 4, 6, 8, 10]

// for (let k = 0; k < arr.length; k++){
//     document.write(arr[k] + "<br>")
// }



// break and continue statement

for (let i = 1; i <= 10; i++){          
    if(i === 9){
        break;                  // it will break the loop when i is 5
    }           
    document.write(i + "<br>")
}


for (let i = 1; i <= 10; i++){          
    if(i === 5){
        continue;               // it will skip the iteration when i is 5
    }   
    document.write(i + "<br>")
}