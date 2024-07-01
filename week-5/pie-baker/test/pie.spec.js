/**
 * Author: Angelica Gutierrez
 * Date: June 30, 2024
 * File Name: pie.spec.js
 * Description: unit tests for the bakePie function
 */

"use strict";

const { bakePie } = require("../src/pie");

console.warn = jest.fn(); // warnings for tests
process.exit = jest.fn(); // exits for tests

// No ingredients missing test
describe('bakePie', () => {
  test('should bake a pie with all essential ingredients', () => {
    const result = bakePie('apple', ['flour', 'sugar', 'butter', 'apples']); // all essential ingridents
    expect(result).toBe('Successfully baked a(n) apple pie!'); // expect to get success message
  });
 
  // 1 ingredient missing test
  test('should fail to bake - flour is missing', () => {
    bakePie('apple', ['sugar', 'butter', 'apples']); // ingridents without flour
    expect(console.warn).toHaveBeenCalledWith('Missing ingredients: flour'); // expect to get warning message
    expect(process.exit).toHaveBeenCalledWith(1); // expect to exit
  });

  // 2 ingredients missing test
  test('should fail to bake - sugar and butter missing', () => {
    bakePie('apple', ['flour', 'apples']); // ingridents without sugar and butter
    expect(console.warn).toHaveBeenCalledWith('Missing ingredients: sugar, butter'); // expect to get warning message
    expect(process.exit).toHaveBeenCalledWith(1); // expect to exit
  });
});