import _ from 'lodash';

// BEGIN
export default (secondObject, keys, firstObject) => {
    if (!firstObject || typeof firstObject !== 'object') {
      return secondObject;
    }
    if (keys.length === 0) {
      Object.assign(secondObject, firstObject);
      return secondObject;
    }
    for (const key of keys) {
      if (Object.hasOwn(firstObject, key)) {
        secondObject[key] = firstObject[key];
      }
    }
    return secondObject;
  }; 
// END