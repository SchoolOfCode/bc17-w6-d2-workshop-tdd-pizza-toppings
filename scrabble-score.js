//implementation will go here
const letters = {
  // moved this to the top
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
  TO: 11,
};
export function calculateScrabbleScore(word) {
  switch (word) {
    case "A":
      return 1;
    case "B":
      return 3;
    case "C":
      return 3;
    case "D":
      return 2;
    case "E":
      return 1;
    case "F":
      return 4;
    case "G":
      return 2;
    case "H":
      return 4;
    case "I":
      return 1;
    case "J":
      return 8;
    case "K":
      return 5;
    case "L":
      return 1;
    case "M":
      return 3;
    case "N":
      return 1;
    case "O":
      return 1;
    case "P":
      return 3;
    case "Q":
      return 10;
    case "R":
      return 1;
    case "S":
      return 1;
    case "T":
      return 1;
    case "U":
      return 1;
    case "V":
      return 4;
    case "W":
      return 4;
    case "X":
      return 8;
    case "Y":
      return 4;
    case "Z":
      return 10;
    case "TO":
      return 11;
    case "TO": //moved this case to here instead of bellow of what we were doing bellow
      return ["T"] + ["O"];
  }
}

/* export function calculateScrabbleScore(firstLetter, secondLetter) {
    switch (firstLetter) {
case "TO":
  return ['T'] + ['O'];
    }
  }
*/
/*export default function calculate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
    case "sq":
      // Even if caller passes in an argument for `secondNumber`, it's effectively ignored.
      return firstNumber * firstNumber;
    default:
      throw new Error(`Unsupported operator ${operator}`);
  }
} */
