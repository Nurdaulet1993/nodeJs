const fs = require('fs');
const fsAsync = require('fs/promises');

// Запись в файл
const message = 'Константы — те же переменные. Единственная разница в том, что их нельзя переопределить.';

// Синхронная запись

try {
  fs.writeFileSync('./test.txt', message);
  console.log('done');
} catch (err) {
  console.log(err)
}

//Асинхронная запись в файл колбэк
// fs.writeFile('./test.txt', message, (err) => {
//   console.log(err);
// })

//Асинхронная запись в файл промисы
// fsAsync.writeFile('./test.txt', message)
//   .then(() => {
//     // Do after file written
//     console.log('done');
//   })
//   .catch(err => console.log(err));
