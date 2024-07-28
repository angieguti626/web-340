/*
Author: Angelica Gutierrez
Date: 28 July 2024
File Name: game-characters.spec.js
*/

const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters(); // new GameCharacters instance before each test
  });

  test("should return game characters data", (done) => {
    // TODO: Implement this test
    gameCharacters.getGameCharacters((data, error) => {
      expect(error).toBeNull(); // toBeNull function in Jest to check that an error is null when there’s no error and that data is null when there’s an error
      expect(data).toEqual([ // toEqual function in Jest to compare the data returned by the getCharacters method to the expected data
        { type: "warrior", gender: "female", fact: "adventurous" },
        { type: "rogue", gender: "male", fact: "creative" },
        { type: "mage", gender: "female", fact: "affectionate" },
      ]);
      done(); // asynchronous test is complete
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("nonexistent-script.js");
    gameCharacters.getGameCharacters((data, error) => {
      expect(data).toBeNull(); // toBeNull function in Jest to check that an error is null when there’s no error
      expect(error).not.toBeNull(); // that data is null when there’s an error
      done(); // asynchronous test is complete
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    const gameCharacters = new GameCharacters("failing-script.js");
    gameCharacters.getGameCharacters((data, error) => {
      expect(data).toBeNull(); // toBeNull function in Jest to check that an error is null when there’s no error 
      expect(error).not.toBeNull(); //  that data is null when there’s an error
      done(); // asynchronous test is complete
    });
  });
});