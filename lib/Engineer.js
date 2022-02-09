//we require the employee file so we can get the constructor values and extend the engineer information into it's parent; employee
const employee = require('./Employee');

class engineer extends employee {
    constructor(name, id, email, githubUsername) {
        //pulling from parent constructor values
        super(name, id, email);
        //applying new value of githubusername. Not originall from parent file. 
        this.githubUsername = githubUsername

    }
    getname() {
        return this.name;
    }

    getid() {
        return this.id;
    }

    getemail() {
        return this.email;
    }
    //new value. We're getting the githubusername value and return this.githubusername. 
    getgithubUsername() {
        return this.githubUsername;
    }
}
//exporting the contents of this class

module.exports = engineer;