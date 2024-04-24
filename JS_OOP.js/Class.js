
// Class Are Blueprint Of An object.
// Class is a Template while Object Are Instances Of The Class.
/* Using let Of var to declare variable inside a Class 
is Unnecessary,Beacuse Class Properties Are 
Automatically Scoped To The Class Instance And 
Don't Require Explicit variable Declarations.
*/


// Declaring Class & Using Class :

class person{
    first_name = "fardin";
    last_name = "hassan Jihad";

    getName(){
        return (`My full Name Is ${this.first_name} ${this.last_name}.`);
    }
}

let bektti = new person();
// console.log(bektti.first_name);
// console.log(bektti.last_name);
console.log(bektti.getName());

// Re-declaring class