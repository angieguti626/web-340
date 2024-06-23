/**
 * Author: Angelica Gutierrez
 * Date: June 23, 2024
 * File Name: taco-stand.js
 * Description: TacoStandEmitter class module that extends the EventEmitter class from Node.js
 */

"use strict";

const EventEmitter = require("events");

// TODO: Create a tacoStandEmitter class that extends EventEmitter and implements the following methods: serve, prepare, and rush
class TacoStandEmitter extends EventEmitter {
    // serveCustomer(customer: string): Emits a “serve” event with the customer as the actual parameter.  
    serveCustomer(customer) {
        this.emit('serve', customer);
    }
    // prepareTaco(taco: string): Emits a “prepare” event with the taco as the actual parameter. 
    prepareTaco(taco) {
        this.emit('prepare', taco);
    }
    // handleRush(rush: string): Emits a “rush” event with the rush as the actual parameter.
    handleRush(rush) {
        this.emit('rush', rush);
    }
}

module.exports = TacoStandEmitter;