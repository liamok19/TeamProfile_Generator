//we require the employee file so we can get the constructor values and extend the intern information into it's parent; employee
const employee = require('./Employee');

class intern  extends employee {
    constructor(name, id, email, school) {
        //pulling from parent constructor values
        super(name, id, email);
        //applying new value of githubusername. Not originall from parent file. 

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
    //new value. We're getting the school value and return this.school. 
    getschool() {
        return this.school;
    }
}
//exporting the contents of this class
module.exports = intern;