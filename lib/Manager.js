//we require the employee file so we can get the constructor values and extend the Manager information into it's parent; employee
const employee = require('./Employee');

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        //pulling from parent constructor values
        super(name, id, email, officeNumber);
        // //applying new value of githubusername. Not originall from parent file. 
        // this.officeNumber = officeNumber

    }
    //DELETE in the future after research. 
    // may not need this currently what we pull from the super constructor contains officeNumber already. 
    // getofficeNumber() {
    //     return this.officeNumber;
    // }

    //returning string value of the role "manager"
    getRole() {
        return "Manager";
    }
}
//exporting the contents of this class

module.exports = Manager;