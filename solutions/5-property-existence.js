import { words } from 'lodash';

// BEGIN
const countWords = (text) => {
  if (!text) {
    return {};
  }
  const wordArray = words(text.toLowerCase());
  const result = {};
  for (const word of wordArray) {
    result[word] = (result[word] || 0) + 1;
  }
  return result;
}; 
export default countWords;
// END