
// Static Keyword :

class about{
    first_name = "fardin";
    last_name = "Hassan";
    age = "18";
   static city = "Dhaka";

    getName(){
        return(`My full name is ${this.first_name} ${this.last_name}`);
    }
}

console.log(about.city);

