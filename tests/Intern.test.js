const Intern = require('../lib/Intern')
//each employee requires a [0]name, [1]id, [2]emailaddress, [3]officenumber
const intern = new Intern ('Bobby', '7778', 'boby@mail.com', 'hogwarts');

describe('internResult', () => {
    describe('Initialization', () => {
        it('We should receive the constructor values for the intern object', () => {
            //Assert
            expect(intern.name).toEqual('Bobby');
            expect(intern.id).toEqual('7778');
            expect(intern.email).toEqual('boby@mail.com');
            expect(intern.school).toEqual('hogwarts');
        });
    });
    describe('nameCheck', () =>{
        it('should call the getname() value from intern.js', () => {
            expect(intern.getname()).toEqual('Bobby');
        })
    })
    describe('IDCheck', () =>{
        it('should call the getid() value from intern.js', () =>{
            expect(intern.getid()).toEqual('7778');
        })
    })
    describe('EmailCheck', () =>{
        it('should call the getemail() value from intern.js', () =>{
            expect(intern.getemail()).toEqual('boby@mail.com');
        })
    })
    describe('schoolCheck', () =>{
        it('should call the getofficeNumber() value from intern.js', () =>{
            expect(intern.getschool()).toEqual('hogwarts');
        })
    })
});    