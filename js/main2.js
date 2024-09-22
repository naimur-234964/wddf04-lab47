class Person{
    constructor(fname, lname, age){
        this.firstName = fname;
        this.lastName = lname;
        this.age = age;
    }
}

let sazib = new Person("Naimur", "Rahman", 41);
let somoy = new Person("Rownok", "Somoy", 21);
let numair = new Person("Numair", "Siam", 20);
let mukit = new Person("Mukit", "Rahman", 22);

console.log(sazib);
console.log(somoy);
console.log(numair);
console.log(mukit);

document.getElementById("h1").innerHTML = `I'm ${sazib.firstName} ${sazib.lastName}. I'm ${sazib.age} years old.`;