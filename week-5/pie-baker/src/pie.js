/**
 * Author: Angelica Gutierrez
 * Date: June 30, 2024
 * File Name: pie.js
 * Description: bakePie fuction
 */
"use strict";

// function named bakePie that takes a type of pie and an array of ingredients
function bakePie(type, ingredients) {
  const essentialIngredients = ['flour', 'sugar', 'butter']; // essential ingredients are: flour, sugar, and butter.
  const missingIngredients = essentialIngredients.filter(item => !ingredients.includes(item));
  
  // should return a message indicating whether the pie was successfully baked or not
  if (missingIngredients.length > 0) { // if any missing ingridents, then
      console.warn(`Missing ingredients: ${missingIngredients.join(', ')}`); // function should log a warning message
      process.exit(1); // call process.exit(1)
  } else { // no missing ingridents, then
      return `Successfully baked a(n) ${type} pie!`; // pie was baked successfully baked
  }
}

module.exports = { bakePie };