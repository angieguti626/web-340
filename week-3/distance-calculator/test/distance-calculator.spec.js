'use strict';

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testFunctionDescription() {

  // testEarthToMars function
  function testEarthToMars() {
    try {
      assert.strictEqual(calculateDistance('Earth', 'Mars'), 0.5); // expeted value is 0.5
      console.info('Passed testEarthtoMars');
      return true;
    } catch (error) {
      console.error(`Failed testEarthToMars: ${error.message}`);
      return false;
    }
  }

  //testUrnausToNeptune
  function testUranusToNeptune() {
    try {
      assert.strictEqual(calculateDistance('Uranus', 'Neptune'), 11); // expected value is 11
      console.info('Passed testUranusToNeptune');
      return true;
    } catch (error) {
      console.error(`Failed testUranusToNeptune: ${error.message}`);
      return false;
    }
  }

  // testMercuryToSaturn function
  function testMercuryToSaturn() {
    try {
      assert.strictEqual(calculateDistance('Mercury', 'Saturn'), 9.1); // expected value is 9.1
      console.info('Passed testMercurytoSaturn');
      return true;
    } catch (error) {
      console.error(`Failed testMercuryToSaturn ${error.message}`);
      return false;
    }
  }

  // Calling test functions
  testEarthToMars();
  testUranusToNeptune();
  testMercuryToSaturn();

}

// Calling testFunctionDescription
testFunctionDescription();



