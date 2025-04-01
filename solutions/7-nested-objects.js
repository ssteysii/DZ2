// BEGIN
export default function (object, keys) {
    if (!object) {
      return null;
    }
    let firstObject = object;
    for (const key of keys) {
      if (typeof firstObject !== 'object' || firstObject === null || !Object.hasOwn(firstObject, key)) {
        return null;
      }
      firstObject = firstObject[key];
    }
    return firstObject;
  }; 
// END