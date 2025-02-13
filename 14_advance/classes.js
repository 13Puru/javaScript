// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `152vdf25ff${this.password}e=b30-0)`;
  }

  changeToUpper() {
    return `${this.username.toUpperCase()}`;
  }
}

const user = new User('13puru', '13purab@gmail.com', '1256vva316h===-@asbdlt')

console.log(user.changeToUpper());
console.log(user.encryptPassword());


