// BEGIN
import fs from 'fs';
export default function () {
    const filePath = './tasks/example.json';
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const JsonFileData = JSON.parse(fileContent);
    return JsonFileData;
  };
// END