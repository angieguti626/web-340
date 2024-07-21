/*
  Author: Angelica Gutierrez
  Date: 21 July 2024
  File Name: character-creation.js
*/
"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For promises:
const fs = require('fs');
const path = require("path")

const { writeFile, readFile } = require("fs").promises;
const { join } = require("path");

const CHARACTER_FILE = join(__dirname, "characters.txt");
const READING_FILE = join(__dirname, "reading.txt");

// Define character data 
async function createCharacter(characterTraits) {
  try {
    const data = characterTraits.join("\n");
    await writeFile(CHARACTER_FILE, data); // writing data to file
  } catch (err) { // error
    throw err;
  }
}

// Get data from read file
async function getCharacters() {
  try {
    const data = await readFile(READING_FILE, "utf8");
    const characterTraits = data.split("\n").filter((character) => character); // how characterTraits is formatted
    return characterTraits; // return traits
  } catch (err) { // error
    throw err;
  }
}

module.exports = { createCharacter, getCharacters }; // For promises