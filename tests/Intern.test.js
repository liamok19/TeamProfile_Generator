const Intern = require('../lib/Intern')
//each employee requires a [0]name, [1]id, [2]emailaddress, [3]officenumber
const intern = new Intern ('Bobby', '7778', 'boby@mail.com', 'hogwarts');

describe('internResult', () => {
    describe('Initialization', () => {
        it('We should receive the constructor values for the intern object', () => {
            //Assert
            expect(intern.name).toBe('Bobby');
            expect(intern.id).toBe('7778');
            expect(intern.email).toBe('boby@mail.com');
            expect(intern.school).toBe('hogwarts');
        });
    });
});    