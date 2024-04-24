
// class Constructor With Parametters :

class person{

    //1. Constructor methods can fire auto.
    //2. Constructor method cannot return.
    //3. Constructor Can Recive parametter.
    constructor(a,b){
        console.log(a+b)
    }

    first_name = "fardin";
    last_name = "fardin";

    getName(){
        return(`My full Name Is ${this.first_name} ${this.last_name}`);
    }
}

let person_obj = new person(a=20,b=30);
