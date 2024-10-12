const fs = require('fs');
const fsAsync = require('fs/promises');


// Чтение файла синхронно
try {
  const data = fs.readFileSync('./file1.txt', 'utf-8');
  console.log(data)
} catch (err) {
  console.log(err);
}


// Чтение файла асинхронно callback
// fs.readFile('./file1.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data)
//   }
// });

// Чтения файла асинхронно promises
// fsAsync.readFile('./file1.txt', 'utf-8')
//   .then((data) => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(err)
//   })
