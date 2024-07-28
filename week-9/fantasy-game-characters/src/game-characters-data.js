/* 
Author: Angelica Gutierrez 
Date: 28 July 2024
File Name: game-characters-data.js
*/

// This script should log a JSON stringified array of game characters objects to the console. 
// TODO: Implement this script

"use strict";

const gameCharacters = [
    { type: "warrior", gender: "female", fact: "adventurous" },
    { type: "rogue", gender: "male", fact: "creative" },
    { type: "mage", gender: "female", fact: "affectionate" },
  ];
  
  console.log(JSON.stringify(gameCharacters));