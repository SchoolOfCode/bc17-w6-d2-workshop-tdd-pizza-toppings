import { calculateScrabbleScore } from "./scrabble-score"; //Your tests will go here

//Write a new test that checks whether `calculateScrabbleScore` correctly calculates the score for the word `A`.

test("Using calculateScrabbleScore award value of 1 to A", () => {
  expect(calculateScrabbleScore("A")).toBe(1);
});
