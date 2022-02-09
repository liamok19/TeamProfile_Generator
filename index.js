const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./tests/Manager.test');
const Engineer = require('./tests/Engineer.test');
const Intern = require('./tests/Intern.test');
const path = require('path');

const promptManager = function () {
    return inquirer.prompt ([
        {
            type: 'input',
            message:'(Required) Whats is your name?', 
            name: 'name',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('You will need to enter your name, pretty please');
                    return false;
                }
            }
        }
    ])
}

promptManager();