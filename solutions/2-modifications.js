import normalize from './2-modifications.js';
// BEGIN
export default function (lesson) {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  lesson.name = capitalize(lesson.name);
  lesson.description = lesson.description.toLowerCase();
}; 
  // END