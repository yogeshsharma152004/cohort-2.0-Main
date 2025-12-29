// SECTION 3: Constructor and Initialization
// 	7.	Create a class named BankAccount.
// Its constructor should accept accountHolderName and balance.
// 	8.	Inside the constructor, store both values using this.
// 	9.	Add a method deposit(amount) that increases the balance.
// 	10.	Create two bank accounts and deposit money into only one.
// Observe and explain why the second account is not affected.

class BankAccount{
    constructor(accountHolderName , balance){
        this.accountHolderName = accountHolderName;
        this.balance = balance ;


    }

    deposit (amount){
       this.balance += amount
    }
}

let holder1 = new BankAccount("sarthak" , 15000)
holder1.deposit(5000)
let holder2 = new BankAccount("rahul" , 10000)

//the second account will not affected becuse we deosit the money into the holder1 