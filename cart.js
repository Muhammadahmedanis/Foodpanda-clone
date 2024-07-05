let addtocartbtn = document.getElementById("addtocartbtn");
if(addtocartbtn)
{
    addtocartbtn.addEventListener("click", () =>{
        location.href = "addtocart.html";
    })
}

let checkoutBtn = document.getElementById("checkoutbtn");
if(checkoutBtn)
{
    checkoutBtn.addEventListener("click", () => {
        location.href = "checkout.html";
    })
}




let priceItem;
let cartNo = document.getElementById("cartNo");  
let getCart = JSON.parse(localStorage.getItem("cartData")) || [];
function add() {
    cartNo.innerText = getCart.length;
}
let show = document.getElementById("sh");
getCart.map((val) => {
    if(show)
    {
        show.innerHTML += `
        <div class="p-4 w-75 d-flex flex-wrap flex-row flex-md-row justify-content-around align-items-center shadow my-3 mx-auto">
        <div class="img5">
            <img class="h-100 w-100" src="${val.img}" alt="">
        </div>
        <p class="cartp">${val.name}</p>
        <p class="cartp">${val.price}</p>
        <div class="d-flex flex-md-row">
            <div class="d-flex cartbtns">
                <button id="minusbtn" class="cartbtn">-</button>
                <p id="num">0</p>
                <button id="plusbtn" class="cartbtn">+</button>
            </div>
            <button class="cartbtn">
                <img class="ps-3" src="./images/trash-2.svg" alt="">
            </button>
        </div>
        </div>`;
    }
    priceItem = val.price;
});

if(cartNo)
{
    add()
}

let addToCart = document.querySelectorAll(".addToCart");
if(addToCart) {
        addToCart.forEach((button, index) => {
        button.addEventListener("click", () => {
            // console.log("Button clicked for card", index);
            // console.log("Button clicked for card", button);
            let cartImg = document.querySelectorAll(".cartImage")[index];
            let cartName = document.querySelectorAll(".cartName")[index];
            let cartPrice = document.querySelectorAll(".cartPrice")[index];
            // console.log(cartImg);
            let cart = {
                img: cartImg.src,
                name: cartName.innerText,
                price: cartPrice.innerText,
            };
            
            getCart.push(cart);
            localStorage.setItem("cartData", JSON.stringify(getCart));
            add();
        });
    });
}


// }




let totalItemOrder =  document.getElementById("totalItemOrder");
let totalCost = document.getElementById("totalCost");
var num = document.getElementById("num");
var plusbtn = document.getElementById("plusbtn");
let i = 1;
if(plusbtn){
    plusbtn.addEventListener("click", () =>{
        num.innerHTML = i;
        totalItemOrder.innerHTML = i;
        totalCost.innerHTML = i * priceItem.slice(8);
        i++;
    })
}

var minusbtn = document.getElementById("minusbtn");
if(minusbtn){

    minusbtn.addEventListener("click", () => {
        if(i != 0)
            {
                i--;
                num.innerHTML = i;
                totalItemOrder.innerHTML = i;
            }
        })
}

if(!window.isDOMLoaded)
{
    window.isDOMLoaded = false;
    document.addEventListener("DOMContentLoaded", () => {
    window.isDOMLoaded = true;
    const loaderProgress = document.querySelectorAll(".loader-container");
    let orderbtn = document.getElementById("orderbtn");
    if(orderbtn)
        {
            orderbtn.addEventListener("click", () =>{
            let width1 = 0;
            let width2 = 0;
            let pro1 = setInterval(() => {
            width1++;
            loaderProgress[0].style.width = width1 + "%";
            if(width1 >= 100)
                {
                    clearInterval(pro1);
                    alert("deleiver to rider");
                    let pro2 = setInterval(() => {
                    width2++;
                    loaderProgress[1].style.width = width2 + "%";
                    if(width2 >= 100)
                        {
                            clearInterval(pro2);
                            alert("Deleiver to coustomer")
                        }
                        }, 100)
                }
                }, 100)
            })
        }
    })
}


if(document.querySelector(".slide-content")){
    swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: 'true',
      grabCursor: true,
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
    },
});
}
