
// filter Array :
/* 
The JavaScript Array filter() Method filter And 
Extra The Element Of An Array That satisfying 
The Provided Condition.
*/

let numArray = [78,9,80,5,10,13,57,95,100];

let result = numArray.filter(function(item){
 //return item > 50
 return item < 50
});

console.log(`${result}`);
