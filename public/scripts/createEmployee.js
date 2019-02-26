let content = document.getElementsByClassName("content")[0];
let titleText = document.getElementById("titleText");
let name = decodeURI(getCookie("login_name"));
let level = decodeURI(getCookie("level"));

let employeesExist = false;

if (employeesExist)
	titleText.textContent = "Create a new employee:";
else
	titleText.textContent = "Please create your first employee:";

$("#saveUser").click(() => {
	let firstName = $("#firstName").val();
	let lastName = $("#lastName").val();
	let password = $("#password").val();

	saveUser(firstName, lastName, password);
});

function createButton(text, clickFunc)
{
	let newButton = document.createElement("button");
	newButton.textContent = text;
	newButton.onclick = clickFunc;
	return newButton;
}

function saveUser(firstName, lastName, password)
{
	let userObj = {};
	userObj.first_name = firstName;
	userObj.last_name = lastName;
	userObj.password = password;

	alert(JSON.stringify(userObj));
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