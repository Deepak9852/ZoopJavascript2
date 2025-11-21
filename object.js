document.writeln("<h1>Object in JavaScript</h1>");

// Creating an object using object literal syntax

let person = {
    "full name": "John",
    age: 30,
    city: "New York"
}
console.log(person);

// Accessing object properties
console.log("Name:", person["full name"]);
console.log("Age:", person.age);
console.log("City:", person.city);


let person2 = {};
person2.name = "Alice";
person2.age = 25;
person2.city = "Los Angeles";
console.log(person2);

// Accessing the properties of person2
console.log("Name:", person2.name);
console.log("Age:", person2.age);
console.log("City:", person2.city);


person.age = 31; // Modifying age property
console.log("Updated age:", person);

// Accessing properties using bracket notation
console.log("Name using bracket notation:", person["full name"]);
console.log("Age using bracket notation:", person["age"]);


// nested object

let employee = {
    name: "Bob",
    position: "Developer",
    address: {
        permanentAddress: {
            street: "123 Main St",
            city: "New York",
            zip: "10001"
        },
        temporaryAddress: {
            street: "456 Elm St",
            city: "Boston",
            zip: "02101"
        }

    }
}

console.log(employee)

// Accessing nested object properties

console.log(employee.address.permanentAddress.city)
console.log(employee.address.temporaryAddress.street)

// Modifying nested object properties
employee.address.permanentAddress.zip = "10002"
console.log("Updated zip:", employee.address.permanentAddress.zip)

// Adding new properties to an object
employee.salary = 80000;
console.log("Added salary:", employee.salary);
console.log(employee);


// Deleting properties from an object

delete employee.position;
console.log("After deleting position:", employee);


// Looping through object properties
for (let key in employee) {
    for (let key in employee.address) {
        // console.log(key + ": " + employee.address[key]);
        for (let key in employee.address.permanentAddress) {
            console.log(key + ": " + employee.address.permanentAddress[key]);
        }
        for (let key in employee.address.temporaryAddress) {
            console.log(key + ": " + employee.address.temporaryAddress[key]);
        }
    }
    console.log(key + ": " + employee[key]);
}

// looping through nested object properties
for (let key in employee.address) {
    console.log(key + ": ");
    for (let subKey in employee.address[key]) {
        console.log("   " + subKey + ": " + employee.address[key][subKey]);
    }

}

// Object methods

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
    getCarInfo: function () {
        return this.brand + " " + this.model + " (" + this.year + ")";
    }
}

car.brand = "Honda"; // Modifying brand property
console.log("Car Info:", car.getCarInfo());


// Destructuring assignment

let person3 = {
    name: "Charlie",
    age: 28,
    city: "Chicago",
    state: "IL",
    country: "USA"
}

let { name, age, city, state, country } = person3;
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);
console.log("State:", state);
console.log("Country:", country);


// rest operator in object destructuring

let { name: personName, age: personAge, ...otherDetails } = person3;
console.log("Person Name:", personName);
console.log("Person Age:", personAge);
console.log("Other Details:", otherDetails);


// spread operator in object
let address1 = {
    street: "789 Pine St",
    city: "Seattle",
    zip: "98101"
}

let address2 = {
    ...address1,
    country: "USA"
}

console.log("Address 2:", address2);
