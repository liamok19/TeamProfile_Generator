const Employee = require('../lib/Employee')
//each employee requires a [0]name, [1]id, [2]emailaddress, [3]officenumber
const employee = new Employee('Liam', '1234', 'britney@mail.com', '678');

describe('Employee', () => {
    describe('Initialization', () => {
        //below is running the arrange and act for each test field. currently i have run tests inidividually splitting the arrange and act process for better understanding. But I can group if necessary
    it('We should receive the constructor values for the employee object', () => {
        //Assert
        expect(employee.name).toBe('Liam');
        expect(employee.id).toBe('1234');
        expect(employee.email).toBe('britney@mail.com');
        expect(employee.officeNumber).toBe('678');
    });
    describe('nameCheck', () =>{
        it('should call the getname() value from employee.js', () => {
          // Arrange
            const text = 'Liam';

          // Act
            const employee = new Employee(text);
    
          // Assert
            expect(employee.getname()).toEqual('Liam');
        })
    })
    describe('IDCheck', () =>{
        it('should call the getid() value from employee.js', () => {
            // Arrange
            //     const idText = '1234';

            // Act
            //     const employee = new Employee(idText);
            
            // Assert
            expect(employee.getid()).toEqual('1234');
        })
    })
    describe('EmailCheck', () =>{
        it('should call the getemail() value from employee.js', () => {
            // Arrange
            //     const email = 'britney@mail.com';

            // Act
            //     const employee = new Employee(email);
            
            // Assert
            expect(employee.getemail()).toEqual('britney@mail.com');
        })
    })
    describe('officeNumberCheck', () =>{
        it('should call the getofficeNumber() value from employee.js', () =>{
            // Arrange
            //     const officeNumber = '678';

            // Act
            //     const employee = new Employee(officeNumber);
            
            // Assert
            expect(employee.getofficeNumber()).toEqual('678');
        })
    })
    });
});