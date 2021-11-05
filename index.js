"use strict";
//***DONE***TODO: Add debugger (see demo video)/! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//***DONE***TODO: Import necessary functions from atm.js
const { getBalance, withdraw, deposit, validatePin } = require("./atm");

//***DONE***TODO: Utilize prompt-sync so we can get user input for various functions/* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions
const prompt = require('prompt-sync')();

function accessATM() {
  //***DONE***TODO: Prompt users for their pin
  let enteredPin = prompt("Enter your pin.")
  //Use ATM.js validatePin function to verify pin matches
  if (validatePin(enteredPin) = true){
    mainMenu();
  }
  //Proceed to main menu ONLY if they match
}

//***DONE***TODO: Call accessATM function
accessATM()

function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  let selection = prompt("Choose from the following options and enter the corresponding number.\n(1)Get Current Balance\n(2)Make Deposit\n(3)Make Withdrawl\n(4)Restart\n(5)Quit\n")
  switch (selection) {
  //1 Get current balance
    case "1":
      getBalance()
      break;
  //2 Make a deposit
    case "2":
      deposit()
      break;
  //3 Make a                                  
    case "3":
      withdraw()
      break;
  //4 Restart
    case "4":
      accessATM()
      break;
  //5 Quit
    case "5":
      return;
  }
}

//***DONE***TODO: Call mainMenu function to start our app!
