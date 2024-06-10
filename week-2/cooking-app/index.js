/**
 * Author: Angelica Gutierrez
 * Date: June 9, 2024
 * File Name: index.js
 * Description: index file to run script
*/

// Import module using require
//const recipes = require("./recipes.js");
const {createRecipe, setTimer, quit} = require("./recipes.js");

// Implement CLI program here
console.log(createRecipe(['flour', 'sugar','eggs' ]));
console.log(setTimer(15));
console.log(quit());