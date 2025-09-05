// console.log(5 + 7)

// airthmetic operators (+ - * / % ** ++ --)

let num1 = 55
let num2 = 7

console.log(num1 + num2) // addition 
console.log(num1 - num2) // subtraction
console.log(num1 * num2) // multiplication
console.log(num1 / num2) // division
console.log(num1 % num2) // modulus operator (gives remainder)
console.log(num1 ** num2) // exponentiation operator (num1 to the power of num2) 7th power of 55 // 55*55*55*55*55*55*55 // 55^7


// let num1 = 55
console.log(++num1) // pre increment
console.log(num1) // 56

console.log(num1++) // post increment
console.log(num1) // 57


console.log(--num1) // pre decrement
console.log(num1) // 56     
console.log(num1--) // post decrement
console.log(num1) // 55

// assignment operators (= += -= *= /= %= **=)

let num3 = 10 // assignment operator

num3 += 5   // num3 = num3 + 5 // 10 + 5 // 15 // addition assignment operator 
console.log(num3) // 15

num3 -= 3   // num3 = num3 - 3 // 15 - 3 // 12 // subtraction assignment operator
console.log(num3) // 12

num3 *= 2   // num3 = num3 * 2 // 12 * 2 // 24 // multiplication assignment operator
console.log(num3) // 24

num3 /= 4   // num3 = num3 / 4 // 24 / 4 // 6 // division assignment operator
console.log(num3) // 6  

num3 %= 4   // num3 = num3 % 4 // 6 % 4 // 2 // modulus assignment operator
console.log(num3) // 2  

num3 **= 3   // num3 = num3 ** 3 // 2 ** 3 // 8 // exponentiation assignment operator
console.log(num3) // 8


// comparison operators (== === != !== > < >= <=) // used to compare two values and return boolean value (true or false)

let num4 = 10
let num5 = '10'

console.log(num4 == num5) // true // equality operator (checks only value)
console.log(num4 === num5) // false // strict equality operator (checks value and datatype)

console.log(num4 != num5) // false // inequality operator (checks only value)
console.log(num4 !== num5) // true // strict inequality operator (checks value and datatype)

let num6 = 15
console.log(num6 > num4) // true // greater than operator
console.log(num6 < num4) // false // less than operator
console.log(num6 >= num4) // true // greater than or equal to operator
console.log(num6 <= num4) // false // less than or equal to operator

// logical operators (&& || !) // used to combine multiple boolean values and return a single boolean value (true or false)

let a = true
let b = false

console.log(a && b) // false // logical AND operator (returns true if both operands are true)
console.log(a || b) // true // logical OR operator (returns true if at least one operand is true)

console.log(!a) // false // logical NOT operator (returns the opposite boolean value)


// truth table

// A     B     A && B     A || B     !A
// true  true   true      true      false
// true  false  false     true      false
// false true   false     true      true
// false false  false     false     true



// ternary operator (condition ? value1 : value2)   // (condition ? 'expression if true' :  expression if false)
// used to evaluate a condition and return one of two values based on the result

let age = 14
let canVote = (age >= 18) ? 'Yes, you can vote' : 'No, you cannot vote'
console.log(canVote) // Yes, you can vote

age = 20
canVote = (age >= 18) ? 'Yes, you can vote' : 'No, you cannot vote'
console.log(canVote) // No, you cannot vote

// odd even using ternary operator

let number = 7
let type = (number % 2 === 0) ? 'number is Even' : 'number is Odd'
console.log(type) // Odd


// bitwise operators (& | ^ ~ << >> >>>) // works on binary numbers

// binary number - 0 and 1

let x = 5 // 0101

let y = 9 // 1001


// 1011011 = 91 (decimal) 


// 2^6 + 2^5 + 2^4 + 2^3 + 2^2 + 2^1 + 2^0
// 64 + 0 +16 + 8 + 0 + 2 + 1 = 91



console.log(x & y) // 1 // bitwise AND operator (returns 1 if both bits are 1)

// 0101
// 1001
// ----
// 0001 = 1 (decimal)

console.log(x | y) // 13 // bitwise OR operator (returns 1 if at least one bit is 1)

// 0101
// 1001
// ----
// 1101 = 2^3 + 2^2 + 2^1 + 2^0 = 8 + 4 + 0 + 1  = 13 (decimal)

console.log(x ^ y) // 12 // bitwise XOR operator (returns 1 if only one bit is 1)

// 0101
// 1001
// ----
// 1100 = 2^3 + 2^2 + 0 + 0 = 8 + 4 + 0 + 0 = 12 (decimal)

// 01101
// 01001
// -----
// 00100 = 4 (decimal)

console.log(~x) // -6 // bitwise NOT operator (inverts all bits)  // -(n+1) = -(5+1) = -6

// 0101
// ----
// 1010 = -6 (two's complement representation)

console.log(~y)

// -10 // -(n+1) = -(9+1) = -10
// 1001
// ----
// 0110 = -10 (two's complement representation)


console.log(x << 2) // 20 // left shift operator (shifts bits to the left and fills with 0s)

// 0101 << 2
// ----
// 010100 = 20 (decimal) // 5 * 2^2 = 5 * 4 = 20            

console.log(y >> 2) // 2 // right shift operator (shifts bits to the right and fills with 0s)
// 1001 >> 2
// ----
// 0010 = 2 (decimal) // 9 / 2^2 = 9 / 4 = 2.25 = 2 (floor value)


console.log(y >>> 2) // 2 // zero-fill right shift operator (shifts bits to the right and fills with 0s)
// 1001 >>> 2
// ----
// 0010 = 2 (decimal) // 9 / 2^2 = 9 / 4 = 2.25 = 2 (floor value)

// operator precedence and associativity(PEDMAS - Parentheses, Exponents, Division and Multiplication, Addition and Subtraction)


let m = 753 // binary 1011110001
let n = 692 // binary 1010110100
let o = 887 // binary 1101110111

