// const manager = require('./lib/Manager.js');
// const engineer = require('./lib/Engineer.js');
// const intern = require('./lib/Intern.js');


module.exports = results => {
// console.log(results);

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
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${results[0].email}">${results[0].email}</a></span></li>
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
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${results[1].email}">${results[1].email}</a></span></li>
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
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${results[2].email}">${results[2].email}</a></span></li>
                <li class="list-group-item">School: ${results[2].school}</li>
            </ul>
        </div>
    </div>
</body>
</html>
`
};


