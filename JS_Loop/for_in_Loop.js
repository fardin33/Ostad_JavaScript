
// for loop is specially designed for the object
// for in Loop :
// key = value

const person={
    name:"fardin",
    age:"18",
    city:"Dhaka",
    gander:"Male"
}

for(let key in person){
    console.log(key + " : " + person[key]);
}