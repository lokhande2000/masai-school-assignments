// "use strict";

// declering a empty array for push inside the array active accounts
let accounts = [];

function BankAccount(accountNumber, name, type, balance, isActiveAccount) {
  this.accountNumber = accountNumber;
  this.name = name;
  this.type = type;
  this.balance = balance;
  this.isActiveAccount = isActiveAccount;

     // check account is active or not 
     this.isActive = function (bool) {
        this.isActiveAccount = bool;
    };

    // deposit amount method
    this.deposit = (amount) => {
        this.balance += amount;
    };

    // withdraw amount method
    this.withdral = function (amount) {
        if(this.isActiveAccount){
            if (amount > this.balance) {
                console.log(`Your Account Balance is inSufficient your account blance is ${this.balance} rs.`);
                return;
            }
    
            this.balance -= amount;

            // check blance is greter than 500 or not 
            if(this.balance < 500){
                this.isActiveAccount = false;
            }
        }else{
            console.log(`Your Account is not Active plase Active your account then procced to withdraw your amount`);
        }
    };
   
}

let cus1 = new BankAccount(123456, "suraj", "saving", 500, true);
let cus2 = new BankAccount(123456, "raj", "saving", 5000, true);
let cus3 = new BankAccount(123456, "tejas", "current", 10000, true);
let cus4 = new BankAccount(123456, "radha", "saving", 2500, true);
let cus5 = new BankAccount(123456, "rajesh", "current", 25000, true);
let cus6 = new BankAccount(123456, "amruta", "saving", 2500, true);
let cus7 = new BankAccount(123456, "arjun", "saving", 400, false);

cus1.deposit(10000);
cus1.withdral(100);

cus4.deposit(10600);

cus6.withdral(300);

accounts.push(cus1, cus2, cus3, cus4, cus5, cus6, cus7);

// check account is active or not suppoes account is active or closed then return true or false 
function accountActivationCheck(array, isActiveAccount){
    return array.filter((e)=>{
        return e.isActiveAccount === isActiveAccount;
    });
}

let activeAccounts = accountActivationCheck(accounts, true);
let notActiveAccounts = accountActivationCheck(accounts, false);
// console.log(activeAccounts);


// fillter the any types of accounts 
function typeCheck(array, type){
     return array.filter((e)=>{
        return e.type === type;
    });
};
let sevingAccounts = typeCheck(activeAccounts , "saving");
let currentAccounts = typeCheck(activeAccounts , "current");
let notActiveAccount = typeCheck(notActiveAccounts , "current");
// console.log(sevingAccounts)
// console.log(currentAccounts)
// console.log(notActiveAccount)


// total of all accounts
function totalBalanceOfAccounts(array){ 
    return array.reduce((acc , curr)=>{
        return acc  += curr.balance;
    }, 0)
}

console.log("accounts",totalBalanceOfAccounts(accounts)); // all accounts total blance
console.log("sevingAccounts",totalBalanceOfAccounts(sevingAccounts)); // all sevingAccounts accounts total blance
console.log("currentAccounts",totalBalanceOfAccounts(currentAccounts)); // all currentAccounts accounts total blance
// console.log("notActiveAccount", totalBalanceOfAccounts(notActiveAccount)); // all notActiveAccount for current accounts total blance
console.log("notActiveAccounts", totalBalanceOfAccounts(notActiveAccounts)); // all notActiveAccounts accounts total blance



