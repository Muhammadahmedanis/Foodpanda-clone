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
    
    let suser = document.getElementById("susername");
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
            location.href = "admin.html";
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
else if(ladmin)
{
    ladmin.addEventListener("click", login);
}
// let sadmin = document.getElementById("sadmin");
// sadmin.addEventListener("click", func)



// Cart Section
let addItem = document.getElementById("addItem");
if(addItem)
{
    let cartArr = [];
    let fastFoodSec = document.getElementById("fastFoodSec");
    addItem.addEventListener("click", () =>{
        let prodImg = document.getElementById("prodImg");
        let prodTitle = document.getElementById("prodTitle");
        let prodReview = document.getElementById("prodReview");
        let prodOrders = document.getElementById("prodOrders");
        let prodPrice = document.getElementById("prodPrice");
        let prodDes = document.getElementById("prodDes");

        let cart = {
            img: prodImg.value,
            title: prodTitle.value,
            review: prodReview.value,
            orders: prodOrders.value,
            price: prodPrice.value,
            des: prodDes.value,
        }
        cartArr.push(cart);

        localStorage.setItem("storeCardData", JSON.stringify(cartArr));
    })
    let getCartData = localStorage.getItem("storeCardData");
    if(getCartData != null)
    {
        cartArr = JSON.parse(getCartData);
        console.log(cartArr);
        cartArr.filter((cartVal) =>{
            console.log(cartVal);
            let div1 = document.createElement("div");
            div1.setAttribute("class", "homeCardSec rounded mb-2")
            let div01 = document.createElement("div");
            div01.setAttribute("class", "cardImg");
            let image1 = document.createElement("img");
            image1.setAttribute("class", "rounded h-100 w-100");
            image1.src = cartVal.img;
            div01.appendChild(image1);
            div1.appendChild(div01);
            fastFoodSec.appendChild(div1);

            let divs = document.createElement("div")
            let div2 = document.createElement("div"); //888
            div2.setAttribute("class", "d-flex px-2 mt-2")
            let title = document.createElement("p")
            title.setAttribute("class", "px-1 fw-bold mb-1")
            let paraTitle = document.createTextNode(cartVal.title)
            title.appendChild(paraTitle); 
            div2.appendChild(title)
            let span1 = document.createElement("span");
            span1.setAttribute("class", "px-1");
            let span1Text = document.createTextNode(cartVal.review);
            span1.appendChild(span1Text);
            div2.appendChild(span1)
            let span2 = document.createElement("span")
            let span2Text = document.createTextNode(cartVal.orders);
            span2.appendChild(span2Text);
            div2.appendChild(span2)
            divs.appendChild(div2)
            div1.appendChild(divs)
            
            let paraDes = document.createElement("p")
            paraDes.setAttribute("class", "px-2 my-2");
            let paraDesText = document.createTextNode(cartVal.des)
            paraDes.appendChild(paraDesText);
            divs.appendChild(paraDes)

            let div3 = document.createElement("div");
            div3.setAttribute("class", "d-flex justify-content-between px-2 mb-1")
            let para2 = document.createElement("p")
            para2.setAttribute("class", "fw-bold");
            let para2Text = document.createTextNode(cartVal.price)
            para2.appendChild(para2Text);
            div3.appendChild(para2)
            let span3 = document.createElement('span')
            span3.setAttribute("class", "addtoCartimg rounded border")
            let span3Text = document.createTextNode("Add")
            span3.appendChild(span3Text);
            div3.appendChild(span3)
            let icon = document.createElement("i")
            icon.setAttribute("class", "text-white pe-0 fa-solid fa-bag-shopping")
            span3.appendChild(icon);
            div3.appendChild(span3);
            divs.appendChild(div3)


        })
    }

}

let goHomePage = document.getElementById("goHome");
if(goHomePage)
{
    goHomePage.addEventListener("click", () => {
        location.href = "home.html";  
    })
}

