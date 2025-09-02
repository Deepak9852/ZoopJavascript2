// document.write("hello world");
// console.log("hello from console")

// constant and variable

// x =10 , x = "mukti" , x = "90deg"


// keywords 
// --- some string/ words that have a reserve meaning
//  class , string , function 
// 52-58
// abstract	arguments	async *	await *
// boolean	break	byte	case
// catch	char	class *	const *
// continue	debugger	default	delete
// do	double	else	enum *
// eval	export *	extends *	false
// final	finally	float	for
// function	goto	if	implements
// function	import *	in	instanceof
// int	interface	let *	long
// native	new	null	package
// private	protected	public	return
// short	static	super *	switch
// synchronized	this	throw	throws
// transient	true	try	typeof
// using *	var	void	volatile
// while	with	yield


// var , let , const
// var -----


// variable declration
var name;

// variable assignment

 name = "sanket"

var name = "Sanket";

// var num = 878683;


// let name1  = " Ankita    "

// const name2 = "   Pankaj  "

// document.write(name + "<br>")
// document.write(name1 , name2 + "<br>")

// document.write(name1 + " " + name2 + "<br>")

// var keyword ---  reassign and redeclare
// let keyword ---- reassign but not redeclare
// const keyword ---- neither reassign nor redeclare


var dept = "Computer science"
dept = "Mechanical"

var dept = "Civil "

document.write(dept + "<br>")


let city = "Pune"
city = "Mumbai"
// let city
document.write(city + "<br>")


const uId  = 87773828787;
// uId = 8376736773
// const uId = 76763565653;

document.write(uId + "<br>")


// case sensitive --- 
// naming convention ----- 
// 1. pascal  ----   MyName
// 2. camelcase  ----- myName
//  alternate ---- city_address

// var my name = 

// data types ------
// 1. primitive ---- single , immutable --- can't change , pass by value
// 2. non- primitive ---- single or double 


// 8cities , my name

document.write("Data_Types" + "<br>"  + "<br>")


// primitive -- number , string , boolean , symbol , undefined , null , BigInt

let num = "77676767672";
document.write(num + "<br>")
document.write(typeof(num) + "<br>")



let Name = "Monika"
document.write(Name + "<br>")
document.write(typeof(Name) + "<br>")


let fool = false

document.write(fool + "<br>")
document.write(typeof(fool) + "<br>")


let symb = Symbol("87834")
// document.write(symb + "<br>")
console.log(symb)
document.write(typeof(symb) + "<br>")

let classes ;
document.write(classes + "<br>")
document.write(typeof(classes) + "<br>")


let money = null;
document.write(money + "<br>")
document.write(typeof(money) + "<br>")


// differce between null and undefined


let bigNumber  = BigInt(7657676876276576256527635);
document.write(bigNumber + "<br>")
document.write(typeof(bigNumber) + "<br>")

let bigNumber2 = 9887676763276746n;
document.write(bigNumber + "<br>")
document.write(typeof(bigNumber) + "<br>")


document.write("Non-primitive data types" + "<br>" + "<br>")


// non-primitive --- single or double , mutable , pass by reference

// Object ---- object , array , date


// Array  ---- index number - starts from zero

let arr1 = ['Mumbai', 'Pune' , 'Nashik' , 'Nagpur' , 'Delhi']

// mumbai - 0
// pune - 1
// nashik - 2
// delhi - 4

document.writeln(arr1 + "<br>")
document.writeln(typeof arr1 + "<br>")
document.writeln(arr1.length + "<br>")
document.writeln(arr1[2] + "<br>")
document.writeln(arr1[4] + "<br>")


let arr2 = ["Minakshi" , 16556, true]
document.writeln(arr2 + "<br>")
document.writeln(arr2[2] + "<br>")


// object ---- key and value pairs

let obj1 = {
    name : "Sankar",
    classes : 10,
    dept : "Computer Science"
}


document.write(obj1.name + "<br>")
document.write(obj1.dept + "<br>")


console.log(obj1)

// document.writeln(typeof obj1 + "<br>")



//  date

let date = new Date();

document.write(date.getFullYear() + "<br>")

document.write("string" + "<br>" +"<br>")



// string

let str1 = "  Hello   World  "
let trimStr1 = str1.trimEnd()

document.write(str1.trim() + "<br>")
document.write(str1.length+ "<br>")

document.write(trimStr1 + "<br>")
document.write(trimStr1.length+ "<br>")






document.write(typeof str1+ "<br>")
document.write(str1.charAt(6)+ "<br>")
document.write(str1.at(12)+ "<br>")


let greet = "Hello , Good Morning !"

let name12 = "Aman"

// let nameGreet =  greet + name12;
let nameGreet =  greet.concat(" "+name12);

document.write( nameGreet+ "<br>")
document.write( greet.concat(" "+name12)+ "<br>")

document.write( nameGreet.toUpperCase()+ "<br>")
document.write( nameGreet.toLowerCase() + "<br>")


document.write( greet.slice(3, 10) + "<br>")
document.write( greet.slice(10) + "<br>")
document.write( greet.slice(-10 , -6) + "<br>")

document.write( greet.substring(0 , 12) + "<br>")
document.write( greet.substring(10) + "<br>")
document.write( greet.substring( -5 ,10) + "<br>")

document.write( greet.substring(-10) + "<br>")



let bigStr = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, dolorum ullam temporibus eveniet molestias voluptas nulla impedit quaerat quisquam vel debitis, quas consequuntur inventore optio odio! Expedita vero sint molestias!"

let splitBigStr = bigStr.split("")

document.writeln(bigStr + "<br>")
document.writeln(bigStr[0] + "<br>")

document.writeln(splitBigStr + "<br>")
document.writeln(splitBigStr[3] + "<br>")

document.writeln(bigStr.replace("Lorem" , "Torem") + "<br>")


// string literals

let currentCity = "Pune"

console.log("I am from " + currentCity)
console.log(`I am from ${currentCity} and I love my city ${currentCity}`)




// Array methods
// 1-d array

let fruits = ["Banana" , "Apple" , "Mango" , "Orange"]
document.writeln(fruits + "<br>")
document.writeln(fruits[2] + "<br>")
document.writeln(fruits.length + "<br>")

console.log(typeof fruits)
console.log(typeof fruits[0])


// 2-d array

let cityArr = [
    ["Pune" , "Mumbai" , "Nagpur"],
    ["Delhi" , "Agra" , "Noida"],
    ["Banglore" , "Chennai" , "Hydrabad"]
]

// 0 -  array of 3 element ["Pune" , "Mumbai" , "Nagpur"]
// 1 -  array of 3 element ["Delhi" , "Agra" , "Noida"]
// 2 -  array of 3 element ["Banglore" , "Chennai" , "Hydrabad"]

document.writeln(cityArr + "<br>")
document.writeln(cityArr[0][2] + "<br>")
// document.writeln(cityArr[1][2] + "<br>")
document.writeln(cityArr[0].length + "<br>")
document.writeln(cityArr[0][1].length + "<br>")


// pune -- cityArr[0][0]
// mumbai -- cityArr[0][1]
// nagpur -- cityArr[0][2]  

// delhi -- cityArr[1][0]
// agra -- cityArr[1][1]
// noida -- cityArr[1][2]       

// banglore -- cityArr[2][0]
// chennai -- cityArr[2][1]
// hydrabad -- cityArr[2][2]

// 3-d array

let cityArr2 = [[["Pune" , "Mumbai" , "Nagpur", "Nashik"],["Delhi" , "Agra" , "Noida"],["Banglore" , "Chennai" , "Hydrabad"]], [["Kathmandu" , "Pokhara" , "Lalitpur"],["Biratnagar" , "Dharan" , "Itahari"],["Janakpur" , "Bardibas" , "Jaleshwor"]]]


console.log(cityArr2.length)
console.log(cityArr2[0].length)
console.log(cityArr2[0][0].length)
console.log(cityArr2[0][0][1].length)

// 0 -  array of 3 element [["Pune" , "Mumbai" , "Nagpur"],["Delhi" , "Agra" , "Noida"],["Banglore" , "Chennai" , "Hydrabad"]]

// 1 -  array of 3 element [["Kathmandu" , "Pokhara" , "Lalitpur"],["Biratnagar" , "Dharan" , "Itahari"],["Janakpur" , "Bardibas" , "Jaleshwor"]]

// 0,0 -  array of 3 element ["Pune" , "Mumbai" , "Nagpur"]
// 0,1 -  array of 3 element ["Delhi" , "Agra" , "Noida"]
// 0,2 -  array of 3 element ["Banglore" , "Chennai" , "Hydrabad"]

// pune -- cityArr2[0][0][0]
// mumbai -- cityArr2[0][0][1]
// nagpur -- cityArr2[0][0][2]

// delhi -- cityArr2[0][1][0]
// agra -- cityArr2[0][1][1]
// noida -- cityArr2[0][1][2]

// banglore -- cityArr2[0][2][0]
// chennai -- cityArr2[0][2][1]
// hydrabad -- cityArr2[0][2][2]

// kathmandu -- cityArr2[1][0][0]
// pokhara -- cityArr2[1][0][1]
// lalitpur -- cityArr2[1][0][2]

// biratnagar -- cityArr2[1][1][0]
// dharan -- cityArr2[1][1][1]
// itahari -- cityArr2[1][1][2]

// janakpur -- cityArr2[1][2][0]
// bardibas -- cityArr2[1][2][1]
// jaleshwor -- cityArr2[1][2][2]



let array3d = [ "a" , ["b" , ["m" , "n"],  "c"] , "d"]

// a - 0
// [b , [m , n],  c] - 1
// d - 2

// b - 1,0
// [m , n] - 1,1
// c - 1,2


// m - 1,1,0
// n - 1,1,1


