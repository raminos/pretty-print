const errorMessage = (elementsType) =>
  `Expected argument to be of type 'object' but got '${elementsType}' instead.`;

function forEachObject(obj, callback) {
  Object.entries(obj).forEach(([key, value]) => callback(key, value));
}

function log(name, value) {
  console.log(name + ":", value);
}

function tableLog(name, values) {
  console.log(name + ":");
  console.table(values);
}

export default function print(elements) {
  if (!(elements instanceof Object))
    throw TypeError(errorMessage(typeof elements));

  forEachObject(elements, (name, value) => log(name, value));
}

export function prettyPrint(elements) {
  if (!(elements instanceof Object))
    throw TypeError(errorMessage(typeof elements));

  forEachObject(elements, (name, value) =>
    Array.isArray(value) || value instanceof Object
      ? tableLog(name, value)
      : log(name, value)
  );
}

const num = 10;
const word = "I'm a string";
const person = { name: "Ramin", age: 28 };
const people = [person, { name: "Elise", age: 26 }];
const nums = [1, 2, 3, 4, 5];

print({ num, word, person, people, nums });
prettyPrint({ num, word, person, people, nums });
