
// Constructor inside only child class :

class parents{
    constructor(a,b){
        console.log("i am parents Constructor = "+(a+b));
    }
}

class son extends parents{}


//let parents_obj = new parents();
let son_obj = new son(a=20,b=30);