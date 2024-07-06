/**
 * Author: Angelica Gutierrez
 * Date: July 7, 2024
 * File Name: server.specs.js
 * Description: Tests for character routes
 */

"use strict";

const http = require('http');
const server = require('../src/server');

// TODO: Implement your tests here

describe('Server', () => {
  afterAll(() => {
    server.close();
  });
  
  // Test 1: POST creation of a character
  test('responds to /order POST request with query parameter', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/create?class=Rogue&gender=Female&fact=Her%20favorite%20season%20is%20fall',
      method: 'POST'
    };
  
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      console.log("data " + data);
      res.on('end', () => {
        expect(res.statusCode).toBe(201);
        expect(data).toBe(`Rogue Female character has been created.`);
        done();
      });
    });
  
    req.end();
  });
  
  // Test 2: POST a confirmation of the character creation
  test('responds to /confirm POST request', done => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/confirm',
      method: 'POST'
    };
    const req = http.request(options, res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe('Character creation confirmed.');
        done();
      });
    });
  
    req.end();
  });
  
  // Test 3: GET character info
  test('responds to /view GET request', done => {
    http.get('http://localhost:3000/view', res => {
      let data = '';
      res.on('data', chunk => {
        data += chunk;
      });
      res.on('end', () => {
        expect(res.statusCode).toBe(200);
        expect(data).toBe("Character: Rogue Female. Fun fact: Her favorite season is fall");
        done();
      });
    });
  });
});