// External JavaScript :


// Example Number :01 -- Topic_Name : Let ---
let course = "Mastering JavaScript";  //String Type
let duration = 6;  //number - integer
let courseRunning = true;  //boolean Type

let Name = "Fardin Hassan";
  Name = "Mr. Fardin Hassan"
    
      console.log(course);
      console.log(duration);
      console.log(courseRunning);
      console.log(Name);  




    
// Example Number: 02 --Topic_Name : Constant ---
 const n1 = 15;
 const n2 = 5;
 const sum = n1 + n2;

 console.log(sum); 





// Example Number: 03 --Topic_Name : function ---
 function add(a,b){
  return a + b;
 }




 // Example Number: 04 --Topic_Name : Array --- 
 const books1 ="The Alchemist";
 const books2 ="The Power Of Now";
 const books3 ="The Art Of War";
 const books4 ="The 48 laws Of Power";

 const books = ["The Alchemist","The Power Of Now","The Art Of War","The 48 laws Of Power"];

 // How Many Books Are In The Array?
 console.log("Total Books: "+ books.length); // Coercion //Concatenation/Concat



/*
// Example Number: 05 --Topic_Name : ---
 const n1 =Number("16");
 const n2 = Number("14");
 const result = n1 + n2

 console.log(result); 
*/



  function add(a,b){
  sum = a + b;
  return sum;
  //console.log(sum,"*****");
 }

 let x = add(45,9);
 console.log(x);
 console.log(output2) 
 





 // Example Number: 06 --Topic_Name : String Interpolation(Only for Javascript Special ,not for Another Languages) ---
 const firstName = "fardin";
 const lastName = "hassan Jihad"
 const age = 18;

 // Normal People Use This Method,Like Dis : 
 const output1 = "Hey My Name Is " + firstName + " " + lastName + " And I Am " + age + " Years Old ";

// But The Professional Programmers Use This Type of Method, Name : Template literal : 
 const output2 = `Hey My Name Is ${firstName} ${lastName} And I am ${age} Years Old`;  // `` This Is Backtick Sign
 
console.log(output2);




// Even And Odd Game : 
const number = 15;
const remainder = 15 % 2 ;
if(remainder === 0 ){
  console.log("The Number Is Even");
} 
else{
  console.log(`The Number Is Odd = ${number}`);
}




// Loop Concept : 

 const loop = 5;
 for (let i = 0; i < loop; i++){
  console.log(i);
 }

