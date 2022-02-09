const Engineer = require('../lib/Engineer')
//each employee requires a [0]name, [1]id, [2]emailaddress, [3]officenumber
const engineer = new Engineer ('Lemon', '3456', 'lemon@mail.com', 'lemon123');

describe('internResult', () => {
    describe('Initialization', () => {
        it('We should receive the constructor values for the intern object', () => {
            //Assert
            expect(engineer.name).toBe('Lemon');
            expect(engineer.id).toBe('3456');
            expect(engineer.email).toBe('lemon@mail.com');
            expect(engineer.githubUsername).toBe('lemon123');
        });
    });
    describe('nameCheck', () =>{
        it('should call the getname() value from engineer.js', () => {
            expect(engineer.getname()).toBe('Lemon');
        })
    })
    describe('IDCheck', () =>{
        it('should call the getid() value from engineer.js', () =>{
            expect(engineer.getid()).toBe('3456');
        })
    })
    describe('EmailCheck', () =>{
        it('should call the getemail() value from engineer.js', () =>{
            expect(engineer.getemail()).toBe('lemon@mail.com');
        })
    })
    describe('githubUsernameCheck', () =>{
        it('should call the getofficeNumber() value from engineer.js', () =>{
            expect(engineer.getgithubUsername()).toBe('lemon123');
        })
    })
});    