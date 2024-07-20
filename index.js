#! /usr/bin/env node
class Bankaccount {
    accountbalance;
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("Credit successfully get into new account & your balance is :" + this.accountbalance);
        }
        else {
            console.log("Credit unsuccessful");
        }
    }
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("Debit successfully share in new account balanc:" + this.accountbalance);
        }
        else {
            console.log("Debit unsuccessfully");
        }
    }
}
class Customer {
    person;
    age;
    gender;
    mobile_number;
    bankaccount;
    constructor(person, age, gender, mobile_number, bankaccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    display() {
        console.log("Name: " + this.person.firstname + " " + this.person.lastname);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Mobile Number: " + this.mobile_number);
        console.log("Amount In Bank: " + this.bankaccount.accountbalance);
        console.log();
    }
}
const a1 = new Bankaccount(800);
const c1 = new Customer({ firstname: "Sana", lastname: "Javed" }, 27, "female", 1234565457, a1);
c1.display();
c1.bankaccount.debit(500);
console.log();
const a2 = new Bankaccount(500);
const c2 = new Customer({ firstname: "Ali", lastname: "Hasan" }, 26, "male", 98789654357, a2);
c2.display();
c2.bankaccount.debit(200);
console.log();
export {};
