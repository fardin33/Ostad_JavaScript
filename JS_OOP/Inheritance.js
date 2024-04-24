
// Inheritance :
// first example Think about father & son.

class father{
    addNumber(){
    let a = 10;
    let b = 20;
    let c = 30;
    console.log(a+b+c);
    }
}

class son extends father{

    // Overriding method:
    addNumber(){
        let a = 10;
        let b = 20;

        console.log(a+b);
    }
}

// let father_obj = new father();
// father_obj.addNumber();
 
let son_obj = new son();
son_obj.addNumber();


