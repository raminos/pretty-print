import print, { prettyPrint } from "./index.js";

const num = 10;
const word = "I'm a string";
const person = { name: "Ramin", age: 28 };
const people = [person, { name: "Elise", age: 26 }];
const nums = [1, 2, 3, 4, 5];

print({ num, word, person, people, nums });
prettyPrint({ num, word, person, people, nums });
