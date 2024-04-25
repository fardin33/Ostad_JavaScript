
// Constructor inside only parent class  And Pass Parametters:

class parent{
    constructor(a,b){
        console.log("i am parent Constructor = "+(a+b));
    }
}

class son extends parent{}

//let parent_obj = new parent();
let son_obj = new son(a=20,b=30);




// Constructor inside only Child class :

class parent{
    
}

class child extends parent{
    constructor(a,b){
        super();
        console.log("I am child Constructor = "+(a+b));
    }
}

let child1_obj = new child(a=20,b=30);





// Constructor Inside Both Parent And Child Class : 
class parent{
    constructor(a,b){
        console.log("I am parent Constructor = "+(a+b));
    }
}

class child extends parent{
    constructor(a,b){
        super();
        console.log("I am child Constructor = "+(a+b));
    }
}

let child2_obj = new child(a=20,b=30);
// let parent_obj = new parent(a=30,b=40);