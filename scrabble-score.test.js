import { calculateScrabbleScore } from "./scrabble-score"; //Your tests will go here
import { test, expect } from "vitest";

//Write a new test that checks whether `calculateScrabbleScore` correctly calculates the score for the word `A`.

test("Using calculateScrabbleScore award value of 1 to A", () => {
  expect(calculateScrabbleScore("A")).toBe(1);
});

test("Using calculateScrabbleScore award value of 3 to B", () => {
  expect(calculateScrabbleScore("B")).toBe(3);
});
test("Using calculateScrabbleScore award value of 3 to C", () => {
  expect(calculateScrabbleScore("C")).toBe(3);
});
test("Using calculateScrabbleScore award value of 2 to D", () => {
  expect(calculateScrabbleScore("D")).toBe(2);
});
test("Using calculateScrabbleScore award value of 1 to E", () => {
  expect(calculateScrabbleScore("E")).toBe(1);
});
test("Using calculateScrabbleScore award value of 4 to F", () => {
  expect(calculateScrabbleScore("F")).toBe(4);
});
test("Using calculateScrabbleScore award value of 2 to G", () => {
  expect(calculateScrabbleScore("G")).toBe(2);
});
test("Using calculateScrabbleScore award value of 4 to H", () => {
  expect(calculateScrabbleScore("H")).toBe(4);
});
test("Using calculateScrabbleScore award value of 1 to I", () => {
  expect(calculateScrabbleScore("I")).toBe(1);
});
test("Using calculateScrabbleScore award value of 8 to J", () => {
  expect(calculateScrabbleScore("J")).toBe(8);
});
test("Using calculateScrabbleScore award value of 5 to K", () => {
  expect(calculateScrabbleScore("K")).toBe(5);
});
test("Using calculateScrabbleScore award value of 1 to L", () => {
  expect(calculateScrabbleScore("L")).toBe(1);
});
test("Using calculateScrabbleScore award value of 3 to M", () => {
  expect(calculateScrabbleScore("M")).toBe(3);
});
test("Using calculateScrabbleScore award value of 1 to N", () => {
  expect(calculateScrabbleScore("N")).toBe(1);
});
test("Using calculateScrabbleScore award value of 1 to O", () => {
  expect(calculateScrabbleScore("O")).toBe(1);
});
test("Using calculateScrabbleScore award value of 3 to P", () => {
  expect(calculateScrabbleScore("P")).toBe(3);
});
test("Using calculateScrabbleScore award value of 10 to Q", () => {
  expect(calculateScrabbleScore("Q")).toBe(10);
});
test("Using calculateScrabbleScore award value of 1 to R", () => {
  expect(calculateScrabbleScore("R")).toBe(1);
});
test("Using calculateScrabbleScore award value of 1 to S", () => {
  expect(calculateScrabbleScore("S")).toBe(1);
});
test("Using calculateScrabbleScore award value of 1 to T", () => {
  expect(calculateScrabbleScore("T")).toBe(1);
});
test("Using calculateScrabbleScore award value of 1 to U", () => {
  expect(calculateScrabbleScore("U")).toBe(1);
});
test("Using calculateScrabbleScore award value of 4 to V", () => {
  expect(calculateScrabbleScore("V")).toBe(4);
});
test("Using calculateScrabbleScore award value of 4 to W", () => {
  expect(calculateScrabbleScore("W")).toBe(4);
});
test("Using calculateScrabbleScore award value of 8 to X", () => {
  expect(calculateScrabbleScore("X")).toBe(8);
});

test("Using calculateScrabbleScore award value of 4 to Y", () => {
  expect(calculateScrabbleScore("Y")).toBe(4);
});
test("Using calculateScrabbleScore award value of 10 to Z", () => {
  expect(calculateScrabbleScore("Z")).toBe(10);
});


// Test for word with multple letters - to

test('Using calclulateScrabbleScore to award value of t=1, o=10', () => {
  expect(calculateScrabbleScore("TO")).toBe(11);
});