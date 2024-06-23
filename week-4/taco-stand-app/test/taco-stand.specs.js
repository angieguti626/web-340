/**
 * Author: Angelica Gutierrez
 * Date: June 23, 2024
 * File Name: taco-stand.specs.js
 * Description: Tests using the Node.js assert library
 */
"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

const tacoStand = new TacoStandEmitter();

// each test should be wrapped in testFunctionDescription()
function testFunctionDescription() {
    // TODO: Write tests for the tacoStandEmitter using TDD principles
    // testServeCustomer() function
    function testServeCustomer() {
        try {
            tacoStand.on('serve', (customer) => {
                assert.strictEqual(customer, 'John');
                console.log("Passed testServeCustomer");
            });
            tacoStand.serveCustomer('John');
            return true;
        } catch (err) {
            console.error(`Failed testServeCustomer: ${err}`);
            return false;
        }
    }

    // testPrepareTaco() function
    function testPrepareTaco() {
        try {
            tacoStand.on('prepare', (taco) => {
                assert.strictEqual(taco, 'beef');
                console.log("Passed testPrepareTaco");
            });
            tacoStand.prepareTaco('beef');
            return true;
        } catch (err) {
            console.error(`Failed testPrepareTaco: ${err}`);
            return false;
        }
    }

    // testHandleRush() function
    function testHandleRush() {
        try {
            tacoStand.on('rush', (rush) => {
                assert.strictEqual(rush, 'lunch');
                console.log("Passed testHandleRush");
            });
            tacoStand.handleRush('lunch');
            return true;
        } catch (err) {
            console.error(`Failed testHandleRush: ${err}`);
            return false;
        }
    }

    // calling tests
    testServeCustomer();
    testPrepareTaco();
    testHandleRush();
}

// calling testFunctionDescirption()
testFunctionDescription();
