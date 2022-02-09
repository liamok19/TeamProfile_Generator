const Employee = require('../lib/Employee')
//each employee requires a [0]name, [1]id, [2]emailaddress, [3]officenumber
const employee = new Employee('Liam', '1234', 'britney@mail.com', '678');

describe('employeeResult', () => {
    describe('Initialization', () => {
    it('We should receive the constructor values for the employee object', () => {
        //Assert
        expect(employee.name).toBe('Liam');
        expect(employee.id).toBe('1234');
        expect(employee.email).toBe('britney@mail.com');
        expect(employee.officeNumber).toBe('678');
    });
    // describe('nameCheck', () =>{
    //     it('should call the getname() value from employee.js', () => {
    
    //         expect(employee.getname()).toBe('liam');
    //     })
    // })
    // describe('IDCheck', () =>{
    //     it('should call the getid() value from employee.js', () =>{
    //         expect(employee.getid()).toBe('1234');
    //     })
    // })
    // describe('EmailCheck', () =>{
    //     it('should call the getemail() value from employee.js', () =>{
    //         expect(employee.getemail()).toBe('britney@mail.com');
    //     })
    // })
    // describe('EmailCheck', () =>{
    //     it('should call the getofficeNumber() value from employee.js', () =>{
    //         expect(employee.getofficeNumber()).toBe('678');
    //     })
    // })
    });
});