// Promises

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a === 2) resolve('Success');
  reject('Error Nurdaulet');
});

// p
//   .then(res => {
//     console.log(res);
//   })
//   .catch((message) => {
//     console.log('This is in the catch ' + message)
//   })


const userLoggedOut = true;
const userLoggedIn = false;


// Bad example
function isLoggedIn(callback, errCallback) {
  if (userLoggedOut) {
    errCallback({
      name: 'User logged out',
      message: 'Good by!'
    })
  }

  if (userLoggedIn) {
    errCallback({
      name: 'User logged in',
      message: 'Nice to see you!'
    })
  }


  if (!userLoggedIn && !userLoggedOut) {
    callback('Login please!')
  }
}


// isLoggedIn((message) => console.log(message), (error) => console.log(`${error.name} ${error.message}`));

function isLoggedInPromise() {
  return new Promise((resolve, reject) => {
    if (userLoggedOut) {
      reject({
        name: 'User logged out',
        message: 'Good by!'
      })
    }

    if (userLoggedIn) {
      reject({
        name: 'User logged in',
        message: 'Nice to see you!'
      })
    }


    if (!userLoggedIn && !userLoggedOut) {
      resolve('Login please!')
    }
  })
}

isLoggedInPromise()
  .then(message => console.log(message))
  .catch(error => {
    console.log(`${error.name} ${error.message}`)
  })

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 100)

})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 300)
})

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3)
  }, 500)
})

// Promise.all([
//   promise1,
//   promise2,
//   promise3
// ]).then((message) => {
//     console.log(message)
// })

Promise.race([
  promise1,
  promise2,
  promise3,
]).then((message) => {
  console.log(message)
})
