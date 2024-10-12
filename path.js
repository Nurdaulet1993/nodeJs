const path = require('path');

const macPath = path.join('/user', 'node', 'app.js');
console.log(macPath);

const winPath = path.join('D:\\', 'node', 'app.js');

console.log(winPath)

// Абсолютный путь
const result = path.resolve('test.txt');
console.log(result)

console.log(path.join(__dirname, 'test.txt'))
