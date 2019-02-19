var centerDiv = document.getElementsByClassName("content")[0];
var welcomeText = document.getElementById("welcomeText");
var name = decodeURI(getCookie("login_name"));
var level = decodeURI(getCookie("level"));

level = 2;
name = "{ NAME }";

welcomeText.textContent = "Welcome Back, " + name + "! What would you like to do next?";

let transactionButton = document.createElement("button");
transactionButton.onclick = function() { deny(); }
transactionButton.textContent = "Start Transaction";
centerDiv.appendChild(transactionButton);
centerDiv.appendChild(document.createElement("br"));

if (level == 0)
{
	/*
	if (getCookie("closed_motd") != "1")
	{
		var modal = document.getElementById("myModal");
		var span = document.getElementsByClassName("close")[0];
		span.onclick = function ()
		{
			if (modal.style.display == "block")
			{
				modal.style.display = "none";
				setCookie("closed_motd", "1", 1);
			}
		}

		window.onclick = function (event)
		{
			if (event.target == modal && modal.style.display == "block")
			{
				modal.style.display = "none";
				setCookie("closed_motd", "1", 1);
			}
		}

		modal.style.display = "block";
	}
	*/
}

if (level > 1)
{
	var createEmployeeButton = document.createElement("button");
	createEmployeeButton.onclick = function() { deny(); }
	createEmployeeButton.textContent = "Projects/Clients";
	centerDiv.appendChild(createEmployeeButton);
	centerDiv.appendChild(document.createElement("br"));
}

if (level > 0)
{
	let productReportButton = document.createElement("button");
	productReportButton.onclick = function() { deny(); }
	productReportButton.textContent = "Sales Report: Product";
	centerDiv.appendChild(productReportButton);
	centerDiv.appendChild(document.createElement("br"));
	
	var cashierReportButton = document.createElement("button");
	cashierReportButton.onclick = function() { deny(); }
	cashierReportButton.textContent = "Sales Report: Cashier";
	centerDiv.appendChild(cashierReportButton);
	centerDiv.appendChild(document.createElement("br"));
}

var logoutButton = document.createElement("button");
logoutButton.onclick = function() { deny(); }
logoutButton.textContent = "Logout";
centerDiv.appendChild(logoutButton);

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

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires="+ d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}