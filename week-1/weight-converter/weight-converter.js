/**
 * Author:  Angelica Gutierrez
 * Date: 2 June 2024
 * File Name: weight-converter.js
 * Description: Write a script that converts pounds to kilograms.
*/

"use strict";

// TODO: Implement the weight conversion logic here

// IMPORTANT INFO FIRST / HINTS
// 1 pound = .45359237 kilograms
// Use process.argv to access the command line arguments
// Use console.error to print error messages to stderr 
// Use process.exit(1) to exit the script with a non-zero status code when an error occurs


const lbsToKg = (lbs) => parseFloat((lbs * 0.45359237).toFixed(2)); // multiplying 1 lb to 1 kg and making output rounded to 2 decimal places
const lbWeight = process.argv[2]; // get the lbWeight from CLI args 

// checking if user entered lbs to be converted
if (!lbWeight) { 
    console.error('Usage: node weight-converter.js <pounds>'); // run without a command line argument, display error message 
    process.exit(1); // exit with a non-zero error code 
} 
if (isNaN(lbWeight)) { 
    console.error('Input must be a number.'); // run with a non-numeric command line argument, display error message 
    process.exit(1); // exit with a non-zero error code 
}

console.log(lbsToKg(lbWeight)); // display kg weight