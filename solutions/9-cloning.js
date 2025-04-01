// BEGIN
export default function (object) {
    const result = {};
    for (const key in object) {
      if (Object.hasOwn(object, key)) {
        result[key] = object[key];
      }
    }
    return result;
  };
// END
