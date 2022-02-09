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
});    