class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is: ${this.username}`);
        
    }
}

class Teacher extends User {
    constructor(username, password){
        super(username)
        this.password = password
        
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
        
    }
} 

const userB = new Teacher ('Purab', '12376')

userB.addCourse()
userB.logMe()
