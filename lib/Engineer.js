const employee = require('./Employee');

class engineer extends employee {
    constructor(name, id, email, githubUsername) {
        this.name = name 
        this.id = id 
        this.email = email 
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

    getgithubUsername() {
        return this.githubUsername;
    }
}
module.exports = engineer;