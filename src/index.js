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

function logBasedOnType(name, value) {
  Array.isArray(value) || value instanceof Object
    ? tableLog(name, value)
    : log(name, value);
}

function addMetadataCollapsedGroup() {
  console.groupCollapsed("Metadata");
  console.log("current time:", new Date().toISOString());
  console.groupEnd();
}

function groupContent(elements, title, consoleLogCallback) {
  const elementNames = Object.keys(elements);

  if (elementNames.length > 1) {
    console.group(title ?? elementNames.join(", "));

    consoleLogCallback();
    addMetadataCollapsedGroup();

    console.groupEnd();
  } else {
    consoleLogCallback();
  }
}

function print(elements, title) {
  if (!(elements instanceof Object))
    throw TypeError(errorMessage(typeof elements));

  groupContent(elements, title, () =>
    forEachObject(elements, (name, value) => log(name, value))
  );
}

function prettyPrint(elements, title) {
  if (!(elements instanceof Object))
    throw TypeError(errorMessage(typeof elements));

  groupContent(elements, title, () => forEachObject(elements, logBasedOnType));
}

export { print as default, prettyPrint };
