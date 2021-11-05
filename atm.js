"use strict";
//***DONE***TODO: Import necessary values from account.js
const { pin, bal } = require("./account");

function getBalance() {
  //***DONE***TODO: Return the customer's acct. balance
  return bal;
}

function withdraw(withdrawAmount) {
  //***DONE***TODO: withdraw amount from current acct. balance
  let newBalance = bal - withdrawAmount;

  // Log the current balance after withdrawal is made
  console.log(newBalance);
  return newBalance;
}

function deposit(depositAmount) {
  //***DONE***TODO: deposit amount to current acct. balance
let newBalance = bal + depositAmount;

  // Log the current balance after deposit is made
  console.log(newBalance);
  return newBalance;
}

function validatePin(enteredPin) {
  //***DONE***TODO: Check if entered pin matches account.js pin/Allow access to ATM if matching/Return value should be a Boolean (true or false)/In English: if the PIN entered is correct, return True. Otherwise, return False.
  if (enteredPin = pin){
    return true;
  }
}

//***DONE***TODO: Export these functions
module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin,
}