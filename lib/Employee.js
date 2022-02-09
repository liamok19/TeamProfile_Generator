
class employee {
    constructor(name, id, email, officeNumber) {
        this.name = name 
        this.id = id 
        this.email = email 
        this.officeNumber = officeNumber

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

    getofficeNumber() {
        return this.officeNumber;
    }
}
module.exports = employee;