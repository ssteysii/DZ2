// BEGIN
export default function (name, options = {}) {
    const stat = 'moderating';
    const date = Date.now();
    const company = {
      name,
      state: stat,
      createdAt: date,
      ...options,
    };
    return company;
  }; 
// END