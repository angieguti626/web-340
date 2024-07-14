/*
  Author: Angelica Gutierrez
  Date: July 14, 2024
  Filename: character-creator.specs.js
*/

const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    const testData = "Warrior, Female, Favorite color is purple.";
    characterCreator.on('data', (data) => {
      expect(data.toString().trim()).toBe(testData);
      done();
    });
    characterCreator.write(testData);
  }, 100000);

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on("error", (err) => {
      expect(err.message).toBe("Invalid data");
      done();
    });
    characterCreator.write("");
  }, 100000);

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const testData = "Mage, Male, Favorite food is pizza.";
    const expectedOutput = testData + '\n';
    characterCreator.write(testData, 'utf8', () => {
      characterCreator.on('data', (data) => {
        expect(data.toString()).toBe(expectedOutput);
        done();
      });
    });
  });
}, 100000);