const fs = require('fs');

const getContent = (pathToFile, code) => {
  const fileContent = fs.readFileSync(pathToFile, code);
  return fileContent;
}

module.exports = getContent;