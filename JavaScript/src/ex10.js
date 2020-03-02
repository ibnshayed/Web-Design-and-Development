class Person {
    constructor() {
        this.name = undefined;
        this.city = undefined;
    }

}

class Employee extends Person{
    constructor() {
        super(); //this is must
        this.salary = 45000;
        this.depertment = "IT";
    }
}

let e1 = new Employee();
console.log(e1);