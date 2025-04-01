// BEGIN
export default function (users) {
    const names = [];
    for (const { name, ...rest } of users) {
      names.push(name);
    }
    names.sort();
    return names;
  };  
// END