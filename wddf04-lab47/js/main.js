// Function in Object

const person = {
    firstName: "Naimur",
    lastName: "Rahman",
    age: 48,
    location: "Narayanganj",

    fullData:function(){
        // console.log(`My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old. I live in ${this.location}`);
        return `My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old. I live in ${this.location}`;
    }
}

console.log(person);
console.log(person.firstName);
console.log(person["lastName"]);

console.log(person.fullData());

document.getElementById("h1").innerHTML = person.fullData();