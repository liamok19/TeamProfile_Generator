module.exports = data => {

return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TeamProfile</title>
</head>
<body>
    <header>
        <h1><strong> The Team <strong></h1>
    </header>
        <div class="card" style="width: 18rem;">
        <div class="card-header">
    ${data.name} <br/>
    <i class="fas fa-mug-hot"></i>Manager</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${data.email}">${data.email}</a></span></li>
        <li class="list-group-item">Office Number: ${data.officeNumber}</li>
        </ul>
    </div>
        <div class="card" style="width: 18rem;">
        <div class="card-header">
    ${data.name} <br/>
    <i class="fas fa-glasses"></i>Engineer</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${data.email}">${data.email}</a></span></li>
        <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${data.githubUsername}">${data.githubUsername}</a></li>
        </ul>
    </div>
        <div class="card" style="width: 18rem;">
        <div class="card-header">
    ${data.name} <br/>
    <i class="fas fa-user-graduate"></i>Intern</div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${data.id}</li>
        <li class="list-group-item">Email: <span id="email"><a href="mailto:${data.email}">${data.email}</a></span></li>
        <li class="list-group-item">School: ${data.school}</li>
        </ul>
    </div>

</body>
</html>

`
};


