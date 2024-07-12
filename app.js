let logoutbtn = document.getElementById("logoutbtn");
if(logoutbtn)
{
    logoutbtn.addEventListener("click", () => {
        window.location.href = "index.html";
        localStorage.clear();
    })
}


let getUser = () => {
    let users = localStorage.getItem("data");
    if (users) {
        users = JSON.parse(users)
        console.log(users);
    }
    else {
        users = [];
    }

    return users;
}


let func = () => {

    let suser = document.getElementById("susername");
    let semail = document.getElementById("semail");
    let spass = document.getElementById("spassword");
    if (suser.value.trim().length != 0 && semail.value.trim().length != 0 && spass.value.trim().length != 0) {
        let users = getUser();

        var user = {
            email: semail.value,
            pass: spass.value,
        }
        users.push(user);
        localStorage.setItem("data", JSON.stringify(users));
        localStorage.setItem("userN", suser.value);
        location.href = "login.html";
    }
    else {
        alert("field is empty")
    }
    semail.value = '';
    spass.value = '';
    suser.value = '';
}

let login = () => {
    let lemail = document.getElementById("lemail");
    let lpass = document.getElementById("lpassword");
    let users = getUser();
    users.filter((val) => {
        if (lemail.value == val.email && lpass.value == val.pass) {
            console.log(val);
            alert("login success");
            location.href = "index.html";
        }
        else {
            alert("invalid input")
        }
    })

    lemail.value = '';
    lpass.value = '';
}


let sAdmin = document.getElementById("sAdmin");
let sUser = document.getElementById("sUser");
let lUser = document.getElementById("lUser");
let lAdmin = document.getElementById("lAdmin");

if (sAdmin) {
    sAdmin.addEventListener("click", () => {
        func();
    })
}

{
    if (sUser) {
        sUser.addEventListener("click", () => {
            func();
        })
    }
    if (lAdmin) {
        lAdmin.style.display = "none";
    }
    if (lUser) {
        lUser.style.margin = "auto";
    }
}
if (lAdmin) {
    lAdmin.addEventListener("click", () => {
        login();
        location.href = "admin.html";
    })
}
if (lUser) {
    lUser.addEventListener("click", () => {
        login();
        location.href = "main.html";
    })
}

