const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Async task one`);
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log(`Async task 1 consumed`);
});

// 2nd way

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`Async task 2`);
    resolve();
  }, 1000);
}).then(() => {
  console.log(`Async task 2 consumed`);
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Purab", email: "123@example.com" });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Purab", email: "123@example.com" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log(`Promise is either resolved or rejected`);
  });

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Shaan", email: "123@example.com" });
    } else {
      reject("Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log("E: ", error);
  }
}
consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const users = await fetch("https://jsonplaceholder.typicode.com/users");
//     const response = await users.json();
//     console.log(response);
//   } catch (error) {
//     console.log("E: ", error);
//   }
// }
// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => {
    return response.json()
})
.then( (data) => {
    console.log(data);
})
.catch( (error) => {
    console.log("E: ", error);
})
