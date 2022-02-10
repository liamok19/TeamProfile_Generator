const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./tests/Manager.test');
const Engineer = require('./tests/Engineer.test');
const Intern = require('./tests/Intern.test');
const path = require('path');
const { group } = require('console');

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
        },
        {
            type: 'input',
            message:'(Required) Whats is your employee ID?', 
            name: 'employeeID',
            validate: employeeID => {
                if (employeeID){
                    return true;
                } else {
                    console.log('You will need to enter your employeeID, pretty please');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message:'(Required) Whats is your email address?', 
            name: 'emailAddress',
            validate: emailAddress => {
                if (emailAddress){
                    return true;
                } else {
                    console.log('You will need to enter your  email address, pretty please');
                    return false;
                }
            }
        },         
        {
            type: 'input',
            message:'(Required) Whats is your assigned Office Number?', 
            name: 'officeNumber',
            validate: officeNumber => {
                if (officeNumber){
                    return true;
                } else {
                    console.log('You will need to enter your assigned office Number, pretty please');
                    return false;
                }
            }
        }
    ])
    .then(results => {
        const manager = new Manager(results.name, results.employeeID, results.emailAddress, results.officeNumber);
        groupMembers.push(manager);
        prompList();
    })
}

const prompList = () => {
    return inquirer.prompt ([

    ])
}

promptManager();