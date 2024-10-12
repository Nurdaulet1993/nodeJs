const fs = require('fs');
const fsAsync = require('fs/promises');

try {
  fs.unlinkSync('./delete.txt');
  console.log('File was deleted!');
} catch (err) {
  console.log(err)
}

// Callback
fs.unlink('./delete.txt', (err) => {
  if (err) console.log(err);
  console.log('deleted')
})

// Promises
fsAsync.unlink('./delete.txt')
  .then(() => console.log('deleted'))
  .catch(err => console.log(err));
