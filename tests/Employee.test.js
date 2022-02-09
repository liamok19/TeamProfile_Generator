const Employee = require('../lib/Employee')
//each employee requires a [0]name, [1]id, [2]emailaddress, [3]officenumber
const employee = new Employee('liam', '1234', 'britney@mail.com', '678');

describe('employeeResult', () => {
    describe('We should receive the constructor values for the employee object', () => {
        //Assert
        expect(employee.mame).toBe('Liam');
        expect(employee.id).toBe('1234');
        expect(employee.email).toBe('britney@mail.com');
        expect(employee.officeNumber).toBe('678');
    });
});