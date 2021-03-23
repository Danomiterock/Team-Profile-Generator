function generateHTML(data){
  console.log("=====");
  console.log(data);
return `<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <title>/Team Profile Generator</title>
</head>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Team Member Profiles</a>
<body>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="manager">Manager</h5>
          <h6 class="manager-name mb-2 text-muted">"Manager's name: " ${data.managerName}</h6>
          <p class="card-text">"I.D.#: ", ${data.managerId}</p>
          <p class="card-text">"Email: ", ${data.managerEmail}</p>
          <p class="card-text">"Office Phone Number: ", ${data.managerPhone}</p>
        </div>
      </div>    
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="manager">Engineer</h5>
          <h6 class="engineer-name mb-2 text-muted">"Engineer's name: " ${data.engineerName}</h6>
          <p class="card-text">"I.D.#: ", ${data.engineerId}</p>
          <p class="card-text">"Email: ", ${data.engineerEmail}</p>
          <p class="card-text">"GitHub User Name: ", ${data.engineerGitHub}</p>
        </div>
      </div>    
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="manager">Intern</h5>
          <h6 class="intern-name mb-2 text-muted">"Intern's name: " ${data.internName}</h6>
          <p class="card-text">"I.D.#: ", ${data.internId}</p>
          <p class="card-text">"Email: ", ${data.internEmail}</p>
          <p class="card-text">"School Name: ", ${data.schoolName}</p>
        </div>
      </div>    
</body>
</html>`
}
module.exports = generateHTML