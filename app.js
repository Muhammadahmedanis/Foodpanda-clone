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
        console.log(users);
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
                    user: suser.value,
                    email: semail.value,
                    pass: spass.value,
                }
                users.push(user);
                localStorage.setItem("data", JSON.stringify(users));
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
    let userName = document.getElementById("userName")
    let lemail = document.getElementById("lemail");
    let lpass = document.getElementById("lpassword");    
    let users = getUser();
    users.filter((val) => {
        if(lemail.value == val.email && lpass.value == val.pass)
            {
                console.log(val);
                alert("login success");
                location.href = "index.html";
                // if(userName){
                //     userName.innerHTML = `<span>${val.user}</span>`;
                //     console.log(userName);   
                // }
            }
        else{
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

if(sAdmin)
{
    sAdmin.addEventListener("click",()=>{
        func();
    })
}

{
if(sUser)
    {
        sUser.addEventListener("click", ()=>{
            func();
        })
    }    
        if(lAdmin){
            lAdmin.style.display = "none";
        } 
        if(lUser){
            lUser.style.margin = "auto";
        }
}
if(lAdmin)
{
    lAdmin.addEventListener("click", ()=>{
        login();
        location.href = "admin.html";    
    })
}
if(lUser)
    {
        lUser.addEventListener("click", ()=>{
            login();
            location.href = "index.html";
    })
}



// Cart Section
let cartArr = JSON.parse(localStorage.getItem("storeCardData")) || [];
const displayItems = () => {
    cartArr.filter((cartVal) =>{
    if(cartVal.id === "fastfood")
    {
            let fastFoodSec = document.getElementById("fastFoodSec");
            fastFoodSec.innerHTML  += `
            <div class="homeCardSec rounded mb-2">
            <div class="cardImg">
            <img class="rounded h-100 w-100"
            src="${cartVal.img}"alt="">
            </div>
            <div>
                <div class="d-flex px-2 mt-2">
                    <p class="px-1 fw-bold mb-1">${cartVal.title}</p>
                    <span class="px-1">${cartVal.review}</span>
                    <span>(${cartVal.orders}+)</span>
                </div>
                <p class="px-2 my-2">${cartVal.des}</p>
                <div class="d-flex justify-content-between px-2 mb-1">
                    <p class="fw-bold">${cartVal.price} Rs</p>
                    <button class="ca addToCart">
                        <span class="addtoCartimg rounded border">Add<i
                        class="text-white pe-0 fa-solid fa-bag-shopping"></i>
                    </button>
                </div>
            </div>
        </div>`
    }
    else if (cartVal.id === "icecream")
    { 
        let icecreamSec = document.getElementById("icecreamSec");
            icecreamSec.innerHTML  += `
            <div class="homeCardSec rounded mb-2">
            <div class="cardImg">
            <img class="rounded h-100 w-100"
            src="${cartVal.img}"alt="">
            </div>
            <div>
                <div class="d-flex px-2 mt-2">
                    <p class="px-1 fw-bold mb-1">${cartVal.title}</p>
                    <span class="px-1">${cartVal.review}</span>
                    <span>(${cartVal.orders}+)</span>
                </div>
                <p class="px-2 my-2">${cartVal.des}</p>
                <div class="d-flex justify-content-between px-2 mb-1">
                    <p class="fw-bold">${cartVal.price} Rs</p>
                    <button class="ca addToCart">
                        <span class="addtoCartimg rounded border">Add<i
                        class="text-white pe-0 fa-solid fa-bag-shopping"></i>
                    </button>
                </div>
            </div>
        </div>`
    }
    else if(cartVal.id === "beverage")
    {
        let beverageSec = document.getElementById("beverageSec");
            beverageSec.innerHTML  += `
            <div class="homeCardSec rounded mb-2">
            <div class="cardImg">
            <img class="rounded h-100 w-100"
            src="${cartVal.img}"alt="">
            </div>
            <div>
                <div class="d-flex px-2 mt-2">
                    <p class="px-1 fw-bold mb-1">${cartVal.title}</p>
                    <span class="px-1">${cartVal.review}</span>
                    <span>(${cartVal.orders}+)</span>
                </div>
                <p class="px-2 my-2">${cartVal.des}</p>
                <div class="d-flex justify-content-between px-2 mb-1">
                    <p class="fw-bold">${cartVal.price} Rs</p>
                    <button class="ca addToCart">
                        <span class="addtoCartimg rounded border">Add<i
                        class="text-white pe-0 fa-solid fa-bag-shopping"></i>
                    </button>
                </div>
            </div>
        </div>`
    }

  })
}
if(cartArr){
    displayItems();
}


let addItem = document.getElementById("addItem");
if(addItem)
{
    addItem.addEventListener("click", () =>{
        let prodId     = document.getElementById("prodId");
        let prodImg    = document.getElementById("prodImg");
        let prodTitle  = document.getElementById("prodTitle");
        let prodReview = document.getElementById("prodReview");
        let prodOrders = document.getElementById("prodOrders");
        let prodPrice  = document.getElementById("prodPrice");
        let prodDes    = document.getElementById("prodDes");
        
        let cart = {
            id: prodId.value,
            img: prodImg.value,
            title: prodTitle.value,
            review: prodReview.value,
            orders: prodOrders.value,
            price: prodPrice.value,
            des: prodDes.value,
        }
        cartArr.push(cart);
        
        localStorage.setItem("storeCardData", JSON.stringify(cartArr));
        fastFoodSec.innerHTML = '';
        icecreamSec.innerHTML = '';
        beverageSec.innerHTML = '';
        displayItems();
    })
}

let goHomePage = document.getElementById("goHome");
if(goHomePage)
{
    goHomePage.addEventListener("click", () => {
        location.href = "home.html";  
    })
}

