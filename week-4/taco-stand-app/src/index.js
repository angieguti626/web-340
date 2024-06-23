/**
 * Author: Angelica Gutierrez
 * Date: June 23, 2024
 * File Name: index.js
 * Description: CLI program that uses the TacoStandEmitter class
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./TacoStandEmitter");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Command “serve John”; prints “Taco Stand serves: John”
tacoStand.on('serve', (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

// Command “prepare beef”; prints “Taco Stand prepares: beef taco”
tacoStand.on('prepare', (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

// Command “rush lunch”; prints “Taco Stand handles rush: lunch” 
tacoStand.on('rush', (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
  switch (command) {
    // command serve 
    case 'serve':
      tacoStand.serveCustomer(args.join(' '));
      break;
    // command prepare
    case 'prepare':
      tacoStand.prepareTaco(args.join(' '));
      break;
    // command rush
    case 'rush':
      tacoStand.handleRush(args.join(' '));
      break;
    // command unknown
    default:
      console.error(`Command Unknown: ${command}`);
  }
});

console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);