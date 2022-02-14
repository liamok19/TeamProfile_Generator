const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const path = require('path');

const groupMembers = [];
// const teamMembers = [];

// link to page creation
const generateMarkdown = require('./src/generateMarkdown')


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
        {
            type: 'list',
            name: 'list',
            message: '(Required) Select from the List below what employee you"d like to create or select finish Team Build',
            choices: ['Include team member: Engineer', 'Include team member: Intern', 'Finished team build - select here'], 
        }
    ])
        .then(userChoice => {
            switch (userChoice.list){
                case 'Include team member: Engineer': 
                promptEngineer();
                break
                case 'Include team member: Intern':
                promptIntern();
                break
                case 'Finished team build - select here':
                finishedTeambuild();
            } 
        })
}

//if selected during the promptList then the user will need to fill out the following question to add a new Engineer
const promptEngineer = function () {
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
            message:'(Required) Whats is your Github Username?', 
            name: 'githubUsername',
            validate: githubusername => {
                if (githubusername){
                    return true;
                } else {
                    console.log('You will need to enter your Github Username, pretty please');
                    return false;
                }
            }
        }
    ])
    .then(results => {
        const engineer = new Engineer(results.name, results.employeeID, results.emailAddress, results.githubUsername);
        groupMembers.push(engineer);
        prompList();
    })
}

//if selected during the promptList then the user will need to fill out the following question to add a new intern
const promptIntern = function () {
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
            message:'(Required) Whats school do you attend too?', 
            name: 'school',
            validate: school => {
                if (school){
                    return true;
                } else {
                    console.log('You will need to enter the school this intern goes too, pretty please');
                    return false;
                }
            }
        }
    ])
    .then(results => {
        const intern = new Intern(results.name, results.employeeID, results.emailAddress, results.school);
        groupMembers.push(intern);
        prompList();
    })
}


const finishedTeambuild = () => {
    fs.writeFileSync('./dist/index.html', generateMarkdown(groupMembers), "utf-8");
}


promptManager();
