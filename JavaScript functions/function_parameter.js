
// Name function it's Parameters & Return :

function addTwoNumber(){
    let a = 10;
    let b = 20;
    let c = a + b;

    console.log(c) //Nothing can be seen. Because this function has not been called yet.
}
// Now We Call The function And Let See the Output :
addTwoNumber()




// Now lets see how parameters work in the function :
function addTwoNumber(num1,num2){
    let a = num1;
    let b = num2;
    let c = num1 + num2;
    console.log(c); 
}

addTwoNumber(600,9);


// Now do these with Return function :
function Myfun1(){
    let a = 30;
    let b = 20;
    return a+b;
}

function Myfun2(){
    let a = 30;
    let b = 20;
    return a-b;
}

// Now let's put these call functions in variables :
let x = Myfun1();
let y = Myfun2();

console.log(x)
console.log(y)


// Now lets See The Total Output Result :
let z = Myfun1() + Myfun2();
console.log(z)
