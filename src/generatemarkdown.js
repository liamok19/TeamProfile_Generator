// const manager = require('./lib/Manager.js');
// const engineer = require('./lib/Engineer.js');
// const intern = require('./lib/Intern.js');

// const employee = require("../lib/Employee")

module.exports = results => {
console.log(results);

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
    />
    <title>EmploymentTeam</title>
    <link rel="stylesheet" href="./css/style.css" />
</head>
<body>
    <header >
        <h1 class="headerbar"><strong> My Team <strong></h1>
    </header>
    <div class="employeecontainer">
        <div class="teamcard" style="width: 18rem;">
            <div class="card-header">   
                ${results[0].name} <br/>
                <i class="fas fa-mug-hot"></i>Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${results[0].id}</li>
                <li class="list-group-item">Email Address: <span id="email"><a href="mailto:${results[0].email}">${results[0].email}</a></span></li>
                <li class="list-group-item">Office Number: ${results[0].officeNumber}</li>
            </ul>
        </div>
        <br>
        <div class="teamcard" style="width: 18rem;">
            <div class="card-header">
                ${results[1].name} <br/>
                <i class="fas fa-glasses"></i>Engineer
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${results[1].id}</li>
                <li class="list-group-item">Email Address: <span id="email"><a href="mailto:${results[1].email}">${results[1].email}</a></span></li>
                <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${results[1].githubUsername}">${results[1].githubUsername}</a></li>
            </ul>
        </div>
        <br>
        <div class="teamcard" style="width: 18rem;">
            <div class="card-header">
                ${results[2].name} <br/>
                <i class="fas fa-user-graduate"></i>Intern
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${results[2].id}</li>
                <li class="list-group-item">Email Address: <span id="email"><a href="mailto:${results[2].email}">${results[2].email}</a></span></li>
                <li class="list-group-item">School: ${results[2].school}</li>
            </ul>
        </div>
    </div>
</body>
</html>
`
};


// //new VERISONNN
// const generateManager = function (manager) {
//     return 
//     `       
//     <div class="teamcard" style="width: 18rem;">
//         <div class="card-header">   
//             ${manager[0].name} <br/>
//             <i class="fas fa-mug-hot"></i>Manager
//         </div>
//         <ul class="list-group list-group-flush">
//             <li class="list-group-item">ID: ${manager[0].id}</li>
//             <li class="list-group-item">Email Address: <span id="email"><a href="mailto:${manager[0].email}">${manager[0].email}</a></span></li>
//             <li class="list-group-item">Office Number: ${manager[0].officeNumber}</li>
//         </ul>
//     </div>
//     `
//     ;
// }
// console.log(createManager);

// const generateEngineer = function (engineer) {
//     return 
//     `
//     <div class="teamcard" style="width: 18rem;">
//     <div class="card-header">
//         ${engineer[1].name} <br/>
//         <i class="fas fa-glasses"></i>Engineer
//     </div>
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${engineer[1].id}</li>
//         <li class="list-group-item">Email Address: <span id="email"><a href="mailto:${engineer[1].email}">${engineer[1].email}</a></span></li>
//         <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer[1].githubUsername}">${engineer[1].githubUsername}</a></li>
//     </ul>
//     </div>
//     `
// ;
// }
// console.log(createEngineer);

// const generateIntern = function (intern) {
//     return 
//     `
//     <div class="teamcard" style="width: 18rem;">
//     <div class="card-header">
//         ${intern[2].name} <br/>
//         <i class="fas fa-user-graduate"></i>Intern
//     </div>
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">ID: ${intern[2].id}</li>
//         <li class="list-group-item">Email Address: <span id="email"><a href="mailto:${intern[2].email}">${intern[2].email}</a></span></li>
//         <li class="list-group-item">School: ${intern[2].school}</li>
//     </ul>
//     </div>
//     `
// ;
// }

// console.log(createIntern);

// //pushing above manager, engineer and intern results into the empty array
// generateHTML = function (data) {
//     //starting with an empyt container with an empty array
//     cardArray = [];

//     for (let i = 0; i < data.length; i++) {
//         const employee = data[i];
//         const role = employee.getRole() //retrieving information from the specified role, includin the role"s path

//             //calling Manager functions  one information retrieved we're pushing into the empty CardArray[]
//             if ( role === 'Manager') {
//                 const managerCard = generateManager(employee);

//                 cardArray.push(managerCard);
//             } else {
//                 console.log('result error')
//             }
//             //calling Enigineer functions one information retrieved we're pushing into the empty CardArray[]
//             if ( role === 'Engineer') {
//                 const engineerCard = generateEngineer(employee);

//                 cardArray.push(engineerCard);
//             }else {
//                 console.log('result error')
//             }
//             //calling Intern functions  one information retrieved we're pushing into the empty CardArray[]
//             if ( role === 'Intern') {
//                 const internCard = generateIntern(employee);

//                 cardArray.push(internCard);
//             }else {
//                 console.log('result error')
//             }
//         }    

//     const teamCards = cardArray.join('');
//     console.log(teamCards);


//     const generateTeam = generateEmployeePage(teamCards);
//     console.log(generateTeam);
//     return generateTeam;
// }
// console.log(generateHTML);



// const generateEmployeePage = function (teamCards) {
//     console.log(generateEmployeePage);
//     console.log(teamCards);


//     return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
//     <link
//     rel="stylesheet"
//     href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
//     integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
//     crossorigin="anonymous"
//     />
//     <title>EmploymentTeam</title>
//     <link rel="stylesheet" href="./css/style.css" />
// </head>
// <body>
//     <header >
//         <h1 class="headerbar"><strong> My Team <strong></h1>
//     </header>
//     <main>
//     <div class="container">
//         <div class="row justify-content-center" id="team-cards">
//             <!--Team Cards-->
//             ${teamCards}
//         </div>
//     </div>
// </main>

// </div>
// </body>
// <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
// <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
// <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
// </html>
// `
// };

//export to index.html
// module.exports = generateHTML;
//     `
// }
////////END OF NEW VERSIOn