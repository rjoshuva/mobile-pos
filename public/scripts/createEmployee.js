let content = document.getElementsByClassName("content")[0];
let titleText = document.getElementById("titleText");
let name = decodeURI(getCookie("login_name"));
let level = decodeURI(getCookie("level"));

let employeesExist = false;

if (employeesExist)
    titleText.textContent = "Create a new employee:";
else
    titleText.textContent = "Please create your first employee:";

$(document).ready(() => {

    /*
    GET TEST
    $.get(backendURL + "/api/employee", (result) => {
        alert(result);
    });
    */

    $("#saveUser").click(() => {
        let firstName = document.getElementById("firstName").value;
        let lastName = document.getElementById("lastName").value;
        let password = document.getElementById("password").value;

        saveUser(firstName, lastName, password);
    });
});

function createButton(text, clickFunc) {
    let newButton = document.createElement("button");
    newButton.textContent = text;
    newButton.onclick = clickFunc;
    return newButton;
}

function saveUser(firstName, lastName, password) {
    //{"lastName": "Holt", "firstName": "Steve", "classification": "Jock", "password": "bigyeet101"}'

    /*
    $.post(backendURL + "/api/employee",
    {
        lastName: lastName,
        firstName: firstName,
        classification: "General Manager",
        active: "1",
        password: password
    }, function (data, callbackResponse) {
        console.log("Status: " + callbackResponse);
        if (callbackResponse
            && callbackResponse.status
            && (callbackResponse.status >= 200)
            && (callbackResponse.status < 300))
        {
            setCookie("firstName", firstName);
            setCookie("classification", saveUserRequest.classification);
            location.href = "home.html";
        }
    });*/

    let newEmployeeData = {
        lastName: lastName,
        firstName: firstName,
        classification: "General Manager",
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
            //console.log(xhr);
            console.log(statusText);
        }
    });
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie).replace(/\+/g, ' ');
    var ca = decodedCookie.split(';');

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
