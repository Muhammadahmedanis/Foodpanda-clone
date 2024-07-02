let scon =  document.querySelector(".s-con")
if(scon){
    function clk() {
        scon.setAttribute("class", "visi");
        document.querySelector(".form-container").style.display = "block"
    }
}

var closeTab = document.querySelector(".closeTab")
if(closeTab){
    closeTab.addEventListener("click", () =>{
        document.querySelector(".form-container").style.display = "none"
        // let scon =  document.querySelector(".s-con")
        scon.setAttribute("class", "d-none s-con container");
        
    })
}

let getUser = () => {
    let users = localStorage.getItem("data");
    if(users)
    {
        users = JSON.parse(users)
    }
    else 
    {
        users = [];
    }

    return users;
}


let func = () => {
    
    let suser = document.getElementById("suser");
    let semail = document.getElementById("semail");
    let spass = document.getElementById("spassword");   
    if(suser.value.trim().length != 0 && semail.value.trim().length != 0 && spass.value.trim().length != 0)
        {
            let users = getUser();

            var user = {
                email: semail.value,
                pass: spass.value,
            }
            users.push(user);
            localStorage.setItem("data", JSON.stringify(users))
            location.href = "login.html";
        }
        else
        {
            alert("field is empty")
        }
        semail.value = '';
        spass.value = '';
        suser.value = '';
}

let login =  () => {
    let lemail = document.getElementById("lemail");
    let lpass = document.getElementById("lpassword");    
    let users = getUser();

    users.filter((val) => {
        if(lemail.value == val.email && lpass.value == val.pass)
        {
            console.log(val);
            alert("login success");
        }
    })

    lemail.value = '';
    lpass.value = '';

}
let signUp = document.getElementById("signUp");
var ladmin = document.getElementById("ladmin");

if(signUp)
{
    signUp.addEventListener("click", func)
}
else
{
    ladmin.addEventListener("click", login);
}
// let sadmin = document.getElementById("sadmin");
// sadmin.addEventListener("click", func)
