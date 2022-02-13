module.exports = results => {

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
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
                ${results.name} <br/>
                <i class="fas fa-mug-hot"></i>Manager
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${results.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${results.email}">${results.email}</a></span></li>
                <li class="list-group-item">Office Number: ${results.officeNumber}</li>
            </ul>
        </div>
        <br>
        <div class="teamcard" style="width: 18rem;">
            <div class="card-header">
                ${results.name} <br/>
                <i class="fas fa-glasses"></i>Engineer
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${results.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${results.email}">${results.email}</a></span></li>
                <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${results.githubUsername}">${results.githubUsername}</a></li>
            </ul>
        </div>
        <br>
        <div class="teamcard" style="width: 18rem;">
            <div class="card-header">
                ${results.name} <br/>
                <i class="fas fa-user-graduate"></i>Intern
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${results.id}</li>
                <li class="list-group-item">Email: <span id="email"><a href="mailto:${results.email}">${results.email}</a></span></li>
                <li class="list-group-item">School: ${results.school}</li>
            </ul>
        </div>
    </div>
</body>
</html>
`
};


