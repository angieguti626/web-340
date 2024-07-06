/**
 * Author: Angelica Gutierrez
 * Date: July 7, 2024
 * File Name: server.js
 * Description: Routes for character
 */

"use strict";

const http = require('http');
const url = require('url');

// New Character
let newCharacter = {
  class: "",    // Character's class
  gender: "",   // Character's gender
  fact: ""      // Character's fun fact 
};

// TODO: Implement your server here
const server = http.createServer((req, res) => { // http.createServer method to create your server
  const parsedUrl = url.parse(req.url, true); // Parse the URL
  const pathname = parsedUrl.pathname; // Get path
  const query = parsedUrl.query; // Get query parameters 

  // TODO: Implement your routes here
  // POST route for creating a character
  if (pathname === '/create' && req.method === 'POST') {
    res.writeHead(201); // 201 Created code
    
    // Character should have class, gender, and fun fact
    newCharacter.class = query.class;
    newCharacter.gender = query.gender;
    newCharacter.fact = query.fact;
    
    res.end(`${newCharacter.class } ${newCharacter.gender} character has been created.`); // Response
  } 

  // POST route for confirming the character creation
  else if (pathname === '/confirm' && req.method === 'POST') {
    res.writeHead(200); // 200 OK code
    res.end('Character creation confirmed.'); // Response
  } 

  // GET route for viewing the character (same as creation of character)
  else if (pathname === '/view' && req.method === 'GET') {
    res.writeHead(200); // 200 OK code
    res.end(`Character: ${newCharacter.class} ${newCharacter.gender}. Fun fact: ${newCharacter.fact}`); // Response
  } 
});

// Start your server, listening on port 3000
server.listen(3000, () => { 
  console.log('Server listening on port 3000');
});

module.exports = server;