class Custoemr {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// class instance: 

let myCustomer = new Custoemr("Rachel", "Peterson");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);