$(document).ready(() => {
	let content = document.getElementsByClassName("content")[0];
	let name = decodeURI(getCookie("firstName"));
	let classification = decodeURI(getCookie("classification"));

	if (name == "")
		location.href = "login.html";

	welcomeText.textContent = "Welcome Back, " + name + "! What would you like to do next?";

	content.appendChild(createButton("Start Transaction", () => { deny(); }));
	content.appendChild(document.createElement("br"));

	if (classification == "General Manager")
	{
		content.appendChild(createButton("Create Employee", () => { deny(); }));
		content.appendChild(document.createElement("br"));

		// Remove Later
		content.appendChild(createButton("Sales Report: Product", () => { deny(); }));
		content.appendChild(document.createElement("br"));

		content.appendChild(createButton("Sales Report: Cashier", () => { deny(); }));
		content.appendChild(document.createElement("br"));
	}

	if (classification == "Shift Manager")
	{
		content.appendChild(createButton("Sales Report: Product", () => { deny(); }));
		content.appendChild(document.createElement("br"));

		content.appendChild(createButton("Sales Report: Cashier", () => { deny(); }));
		content.appendChild(document.createElement("br"));
	}

	content.appendChild(createButton("Logout", () => {
		setCookie("firstName", "");
		setCookie("classification", "");
		location.href = "login.html";
	}));
});

function createButton(text, clickFunc)
{
	let newButton = document.createElement("button");
	newButton.textContent = text;
	newButton.onclick = clickFunc;
	return newButton;
}

function deny()
{
	alert("Functionality Not Available", "This functionality has not been implemented yet.");
}