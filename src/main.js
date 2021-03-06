// Are you using `console.log('variable: ', variable)` a lot?
// Use this variable instead and save yourself the typing.
// Usage: print({ foo, bar })
// See the example below
export default function print(elements) {
  if (!(elements instanceof Object)) {
    throw TypeError(
      `Expected argument to be of type 'object' but got '${typeof elements}' instead`,
    );
  }

  Object.entries(elements).forEach(([name, value]) => {
    console.log(name + ":", value);
  });
}

// The prettyPrint function additionally displays collections in a table format.
export function prettyPrint(elements) {
  if (!(elements instanceof Object)) {
    throw TypeError(
      `Expected argument to be of type 'object' but got '${typeof elements}' instead`,
    );
  }

  Object.entries(elements).forEach(([name, value]) => {
    if (Array.isArray(value) || value instanceof Object) {
      console.log(name + ":");
      console.table(value);
    } else {
      console.log(name + ":", value);
    }
  });
}

const num = 10;
const word = "I'm a string";
const person = { name: "Ramin", age: 28 };
const people = [person, { name: "Elise", age: 26 }];
const nums = [1, 2, 3, 4, 5];

print({ num, word, person, people, nums });
// num: 10
// word: I'm a string
// person: { name: 'Ramin', age: 28 }
// people: [ { name: 'Ramin', age: 28 }, { name: 'Elise', age: 26 } ]
// nums: [ 1, 2, 3, 4, 5 ]

prettyPrint({ num, word, person, people, nums });
// num: 10
// word: I'm a string
// person:
// ┌───────┬─────────┐
// │ (idx) │ Values  │
// ├───────┼─────────┤
// │ name  │ "Ramin" │
// │  age  │   28    │
// └───────┴─────────┘
// people:
// ┌───────┬─────────┬─────┐
// │ (idx) │  name   │ age │
// ├───────┼─────────┼─────┤
// │   0   │ "Ramin" │ 28  │
// │   1   │ "Elise" │ 26  │
// └───────┴─────────┴─────┘
// nums:
// ┌───────┬────────┐
// │ (idx) │ Values │
// ├───────┼────────┤
// │   0   │   1    │
// │   1   │   2    │
// │   2   │   3    │
// │   3   │   4    │
// │   4   │   5    │
// └───────┴────────┘
