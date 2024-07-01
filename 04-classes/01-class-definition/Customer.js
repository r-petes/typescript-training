var Custoemr = /** @class */ (function () {
    function Custoemr(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Custoemr;
}());
// class instance: 
var myCustomer = new Custoemr("Rachel", "Peterson");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
