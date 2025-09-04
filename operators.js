// console.log(5 + 7)

// airthmetic operators (+ - * / % ** ++ --)

var num1 = 55
var num2 = 7

console.log(num1 + num2) // addition 
console.log(num1 - num2) // subtraction
console.log(num1 * num2) // multiplication
console.log(num1 / num2) // division
console.log(num1 % num2) // modulus operator (gives remainder)
console.log(num1 ** num2) // exponentiation operator (num1 to the power of num2) 7th power of 55 // 55*55*55*55*55*55*55 // 55^7


// var num1 = 55
console.log(++num1) // pre increment
console.log(num1) // 56

console.log(num1++) // post increment
console.log(num1) // 57


console.log(--num1) // pre decrement
console.log(num1) // 56     
console.log(num1--) // post decrement
console.log(num1) // 55

// assignment operators (= += -= *= /= %= **=)

var num3 = 10 // assignment operator

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

var num4 = 10
var num5 = '10'

console.log(num4 == num5) // true // equality operator (checks only value)
console.log(num4 === num5) // false // strict equality operator (checks value and datatype)

console.log(num4 != num5) // false // inequality operator (checks only value)
console.log(num4 !== num5) // true // strict inequality operator (checks value and datatype)

var num6 = 15
console.log(num6 > num4) // true // greater than operator
console.log(num6 < num4) // false // less than operator
console.log(num6 >= num4) // true // greater than or equal to operator
console.log(num6 <= num4) // false // less than or equal to operator

// logical operators (&& || !) // used to combine multiple boolean values and return a single boolean value (true or false)

var a = true
var b = false

console.log(a && b) // false // logical AND operator (returns true if both operands are true)
console.log(a || b) // true // logical OR operator (returns true if at least one operand is true)
console.log(!a) // false // logical NOT operator (returns the opposite boolean value)


// truth table

// A     B     A && B     A || B     !A
// true  true   true      true      false
// true  false  false     true      false
// false true   false     true      true
// false false  false     false     true