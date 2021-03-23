function generateHTML(employees) {
    const managers = employees.filter(
    (employee) => employee.getRole() === "Manager"
  );
  const engineers = employees.filter(
    (employee) => employee.getRole() === "Engineer"
  );
  const interns = employees.filter(
    (employee) => employee.getRole() === "Intern"
  );
​ return `<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <title>/Team Profile Generator</title>
</head>
<nav class="navbar navbar-dark bg-primary">Team Profile Generator</nav>
<body> 
  <div class="card-group">
    ${managers.map((manager) => renderEmployee(manager))}
    ${engineers.map((engineer) => renderEmployee(engineer))}
    ${interns.map((intern) => renderEmployee(intern))}
  </div>
</body>
</html>`;
}
​
function renderEmployee(employee) {
  return `<div class="card text-white bg-primary mb-3" style="width: 18rem;">
  <div class="card-body">
    <h1 class="manager">${employee.getRole()}</h1>
    <h2 class="employee-name mb-2 text-muted">"${employee.getRole()}'s name: " ${
    employee.name
  }</h2>
    <p class="card-text">"I.D.#: ", ${employee.id}</p>
    <p class="card-text">"Email: ", ${employee.email}</p>
    ${roleSpecific(employee)}
  </div>
</div>`;
}
​
function roleSpecific(employee) {
  if (employee.getRole() === "Manager") {
    return `<p class="card-text">"Office Number: ", ${employee.getOfficeNum()}</p>`;
  } else if (employee.getRole() === "Engineer") {
    return `<p class="card-text">"Github: ", ${employee.getGitHub()}</p>`;
  } else {
    return `<p class="card-text">"School: ", ${employee.getSchool()}</p>`;
  }
}
module.exports = generateHTML;
​
