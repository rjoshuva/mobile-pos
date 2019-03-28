$(document).ready(() => {
    $.get(backendURL + "/api/employee", (result) => {
        if (result.length <= 0) {
            alert("No Employees Found! Redirecting to Employee Create Page.");
            location.href = "createEmployee.html";
        }
    });

    $("#login").click(() => {
        let id = document.getElementById("userid").value;
        let password = document.getElementById("password").value;

        let hash = sha256.create();
        hash.update(password);
        let hashedPasswordAttempt = hash.hex();

        tryLogin(id, hashedPasswordAttempt);
    });

    $("#createEmployee").click(() => {
        location.href = "createEmployee.html";
    });
});

function tryLogin(userID, passwordAttempt) {
    $.get(backendURL + "/api/employee", (data) => {
        let matchingEmployee = null;

        $.each(data, (index, employee) => {
            if (employee.userID === userID && employee.password === passwordAttempt) {
                matchingEmployee = employee;
            }
        });

        if (matchingEmployee !== null) {
            setCookie("firstName", matchingEmployee.firstName);
            setCookie("classification", matchingEmployee.classification);
            location.href = "main.html";
        } else {
            alert("Incorrect First Name, Last Name, or Password!");
        }
    });
}

