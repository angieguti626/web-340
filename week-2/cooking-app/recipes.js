/**
 * Author: Angelica Gutierez
 * Date: June 9, 2024
 * File Name: recipes.js
 * Description: Simple recipe application using the Node.js CommonJS module system
*/

// Define the createRecipe function  
function createRecipe(ingredients) {
  return 'Recipe created with ingredients: ${ingrident.join(',')}'; // gathering recipes 
}

// Define the setTimer function
function setTimer(minutes) {
  // This function should take a number of minutes & return a string 
  return 'Timer set for $(minutes) minutes.';
}

// Define the quit function
function quit() {
  return 'Program exited.'; // display exit message
}

// Export the functions using the module.exports object 
module.exports = {
  createRecipe,
  setTimer,
  quit
};