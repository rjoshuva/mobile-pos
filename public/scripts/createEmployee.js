$(document).ready(() => {
	let titleText = document.getElementById("titleText");

	$.get(backendURL + "/api/employee", (result) => {
		if (result.length > 0)
			titleText.textContent = "Create a new employee:";
		else
			titleText.textContent = "Please create your first employee:";
	});

	$("#saveUser").click(() => {
		let firstName = document.getElementById("firstName").value;
		let lastName = document.getElementById("lastName").value;
		let password = document.getElementById("password").value;
	
		saveUser(firstName, lastName, password);
	});
});

function saveUser(firstName, lastName, password)
{
	let newEmployeeData = {
		lastName: lastName,
		firstName: firstName,
		classification: "General Manager", // Only generating GMs for now
		active: "1",
		password: password
	}

	$.ajax({
		type: "POST",
		cache: "FALSE",
		dataType: "text",
		//contentType: "application/json",
		url: backendURL + "/api/employee",
		data: newEmployeeData,
		complete: (xhr, statusText) => {
			if (statusText == "success")
			{
				setCookie("firstName", firstName);
				setCookie("classification", newEmployeeData.classification);
				location.href = "main.html";
			}
		}
	});
}