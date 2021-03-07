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

function print(elements) {
  if (!(elements instanceof Object))
    throw TypeError(errorMessage(typeof elements));

  forEachObject(elements, (name, value) => log(name, value));
}

function prettyPrint(elements) {
  if (!(elements instanceof Object))
    throw TypeError(errorMessage(typeof elements));

  forEachObject(elements, (name, value) =>
    Array.isArray(value) || value instanceof Object
      ? tableLog(name, value)
      : log(name, value)
  );
}

export { print as default, prettyPrint };
