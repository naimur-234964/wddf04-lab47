class Person{
    constructor(fname, lname, dob){
        this.firstName = fname;
        this.lastName = lname;
        this.dob = dob;
    }

    ageCalculator(){
        let birthday = new Date(this.dob);
        let difference = ;
    }
}

let sazib = new Person("Naimur", "Rahman", "01-01-1966");


console.log(sazib);


document.getElementById("h1").innerHTML = `I'm ${sazib.firstName} ${sazib.lastName}. I'm ${sazib.age} years old.`;