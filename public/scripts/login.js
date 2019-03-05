$(document).ready(() => {
	$.get(backendURL + "/api/employee", (result) => {
		if (result.length <= 0)
		{
			alert("No Employees Found! Redirecting to Employee Create Page.");
			location.href = "createEmployee.html";
		}
	});

	$("#login").click(() => {
		let firstName = document.getElementById("firstName").value;
		let lastName = document.getElementById("lastName").value;
		let password =  document.getElementById("password").value;

		let hash = sha256.create();
		hash.update(password);
		let hashedPasswordAttempt = hash.hex();
	
		tryLogin(firstName, lastName, hashedPasswordAttempt);
	});

	$("#createEmployee").click(() => {
		location.href = "createEmployee.html";
	});
});

function tryLogin(firstName, lastName, passwordAttempt)
{
	$.get(backendURL + "/api/employee", (data) => {
		let matchingEmployee = null;

		$.each(data, (index, employee) => {
			if(employee.firstName == firstName && employee.lastName == lastName && employee.password == passwordAttempt)
				matchingEmployee = employee;
		});

		if (matchingEmployee != null)
		{
			setCookie("firstName", matchingEmployee.firstName);
			setCookie("classification", matchingEmployee.classification);
			location.href = "main.html";
		}
		else
			alert("Incorrect First Name, Last Name, or Password!");
	});
}