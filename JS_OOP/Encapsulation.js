
// Encapsulation is not a class, not a object,not a object.
// Classes, objects, variables can be stored inside a capsule.

/*
// Encapsulation using Closures:

function Profile(){
    let item = 10;

    return{
        profile_Update:function(){
            console.log("Profile Update process");
        },
        photo_Upload:function(){
            console.log("Photo Upload Process")
        },
        Password_Reset:function(){
            console.log("PassWord Reset Process")
        }
    }
}

const Learner_Profile = Profile();

Learner_Profile.photo_Upload();
*/


// Using ES6 Classes:

class Bankaccount{
    #Blance = 0 ; // Private Variable

    Deposit(Amount){
        this.#Blance += Amount;
    }
    Cashout(Amount){
        this.#Blance -= Amount
    }
    CheckBlance(){
        return this.#Blance;
    }
}

const Account = new Bankaccount();

Account.Deposit(Amount = 500);
Account.Cashout(Amount = 50);

console.log(Account.CheckBlance());