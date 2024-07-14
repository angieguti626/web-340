/*
  Author: Angelica Gutierrez
  Date: July 14, 2024
  Filename: character-creator.js
*/

const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.queue = [];
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    // Remember to call callback in your _write method
    const data = chunk.toString().trim();
    if (!data) {
      callback(new Error('Invalid data'));
      return;
    }

    this.queue.push(data);
    callback();
  }

  _read(size) {
    // TODO: Implement your _read method here
    // Use the push method in your Duplex stream to output data.
    if (this.queue.lenfth) {
      this.push(this.queue.shift() + '\n');
    } else {
      this.push(null);
    }
  }
}


module.exports = CharacterCreator;