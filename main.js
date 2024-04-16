#!/usr/bin/evn node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    ELR: 0.91,
    CAD: 0.76,
    INR: 74.57,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter your amount",
        type: "list",
        chocies: ["USD", "ELR", "GDP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter your amount ",
        type: "list",
        chocies: ["USD", "ELR", "CAD", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter your amount to convert",
        type: "number",
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
