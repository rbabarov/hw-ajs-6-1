export default function displayingProperties(obj, [...props]) {
  const sortableProperties = [...props];
  const enteredObject = {};
  Object.assign(enteredObject, obj);
  const result = [];

  for (let i = 0; i < sortableProperties.length; i += 1) {
    for (const prop in obj) {
      if (prop === sortableProperties[i]) {
        result.push({
          key: prop, value: obj[prop],
        });
        delete enteredObject[prop];
      }
    }
  }

  const remainingProperties = Object.keys(enteredObject);
  remainingProperties.sort();

  for (let i = 0; i < remainingProperties.length; i += 1) {
    result.push({
      key: remainingProperties[i], value: obj[remainingProperties[i]],
    });
  }

  return result;
}
