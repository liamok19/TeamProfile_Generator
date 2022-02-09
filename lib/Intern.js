const employee = require('./Employee');

class intern  extends employee {
    constructor(name, id, email, githubUsername) {
        this.name = name 
        this.id = id 
        this.email = email 
        this.school = school

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

    getschool() {
        return this.school;
    }
}
module.exports = intern;