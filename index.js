"use strict";
//***DONE***TODO: Add debugger (see demo video)/! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//***DONE***TODO: Import necessary functions from atm.js
const { getBalance, withdraw, deposit, validatePin } = require("./atm");

//***DONE***TODO: Utilize prompt-sync so we can get user input for various functions/* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions
const prompt = require('prompt-sync')();

function accessATM() {
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
}

//TODO: Call accessATM function

function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
}

//TODO: Call mainMenu function to start our app!
