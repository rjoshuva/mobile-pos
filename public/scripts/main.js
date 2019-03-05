let content = document.getElementsByClassName("content")[0];
let name = decodeURI(getCookie("firstName"));
let level = decodeURI(getCookie("classification"));

level = 2;
name = "{ NAME }";

welcomeText.textContent = "Welcome Back, " + name + "! What would you like to do next?";

content.appendChild(createButton("Start Transaction", () => { deny(); }));
content.appendChild(document.createElement("br"));

if (level == "General Manager")
{
	content.appendChild(createButton("Create Employee", () => { deny(); }));
	content.appendChild(document.createElement("br"));
}

if (level >= 1) // Shift Manager
{
	content.appendChild(createButton("Sales Report: Product", () => { deny(); }));
	content.appendChild(document.createElement("br"));

	content.appendChild(createButton("Sales Report: Cashier", () => { deny(); }));
	content.appendChild(document.createElement("br"));
}

content.appendChild(createButton("Logout", () => { redirectTo("login.html"); }));

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

function redirectTo(url)
{
	location.href = url;
}

function getCookie(cname)
{
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie).replace(/\+/g, ' ');
	var ca = decodedCookie.split(';');

	for(var i = 0; i <ca.length; i++)
	{
		var c = ca[i];
		while (c.charAt(0) == ' ')
		{
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0)
		{
			return c.substring(name.length, c.length);
		}
	}

	return "";
}

function setCookie(cname, cvalue, exdays)
{
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}