// BEGIN
const pick = (firstObject, properties) => {
    const result = {};
      if (!firstObject || typeof firstObject !== 'object' || !Array.isArray(properties)) {
      return result;
    }
    const firstKeys = Object.keys(firstObject);
    for (const property of properties) {
      if (firstKeys.includes(property)) {
        result[property] = firstObject[property];
      }
    } 
    return result;
  };
  export default pick;
// END