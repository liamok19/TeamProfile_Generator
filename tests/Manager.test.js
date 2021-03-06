const Manager = require('../lib/Manager')
//each employee requires a [0]name, [1]id, [2]emailaddress, [3]officenumber
const manager = new Manager('Jess', '5678', 'jess@mail.com', '6123');

describe('managerResult', () => {
    describe('Initialization', () => {
        it('We should receive the constructor values for the manager object', () => {
            //Assert
            expect(manager.name).toBe('Jess');
            expect(manager.id).toBe('5678');
            expect(manager.email).toBe('jess@mail.com');
            expect(manager.officeNumber).toBe('6123');
        });
    });
    describe('nameCheck', () =>{
        it('should call the getname() value from manager.js', () => {
    
            expect(manager.getname()).toBe('Jess');
        })
    })
    describe('IDCheck', () =>{
        it('should call the getid() value from manager.js', () =>{
            expect(manager.getid()).toBe('5678');
        })
    })
    describe('EmailCheck', () =>{
        it('should call the getemail() value from manager.js', () =>{
            expect(manager.getemail()).toBe('jess@mail.com');
        })
    })
    describe('officeNumberCheck', () =>{
        it('should call the getofficeNumber() value from manager.js', () =>{
            expect(manager.getofficeNumber()).toBe('6123');
        })
    })
});    