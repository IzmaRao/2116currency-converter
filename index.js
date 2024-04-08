#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    DIR: 3.67,
    CAD: 1.36,
    AUD: 1.52,
    PKR: 280,
};
let user_answere = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from Currency",
        choices: ["USD", "EUR", "GBP", "INR", "DIR", "CAD", "AUD", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to Currency",
        choices: ["USD", "EUR", "GBP", "INR", "DIR", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    }
]);
let fromamount = currency[user_answere.from]; // exchange rate
let toamount = currency[user_answere.to]; // exchange rate
let amount = user_answere.amount;
let basseamount = amount / fromamount; // usd base currency
let cnvertedAmount = basseamount * toamount;
console.log(cnvertedAmount);
// let stu1 = "ali";
// let stu2 = "umer";
// let stu3 = "amir";
// let studnetdat = {
//     name: "Izma",
//     age: 16,
//     rollno: 4648,
//     addrees: "gulitan-e-johar"
// }
// console.log(studnetdat['name']);
