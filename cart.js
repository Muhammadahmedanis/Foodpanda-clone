let addtocartbtn = document.getElementById("addtocartbtn");
if (addtocartbtn) {
    addtocartbtn.addEventListener("click", () => {
        location.href = "addtocart.html";
    })
}

let checkoutBtn = document.getElementById("checkoutbtn");
if (checkoutBtn) {
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
if (show) {
    getCart.map((val, index) => {
        show.innerHTML += `
        <div class="p-4 w-75 d-flex flex-wrap flex-row flex-md-row justify-content-around align-items-center shadow my-3 mx-auto">
        <div class="img5">
            <img class="h-100 w-100" src="${val.img}" alt="">
        </div>
        <p class="cartp">${val.name}</p>
        <p class="cartp price">${val.price}</p>
        <div class="d-flex flex-md-row align-items-center">
            <div class="d-flex cartbtns">
                <button class="minusbtn cartbtn" data-index="${index}">-</button>
                <p class="num" data-index="${index}">0</p>
                <button class="plusbtn cartbtn" data-index="${index}">+</button>
            </div>
            <button class="cartbtn">
                <img class="ps-3" src="./images/trash-2.svg" alt="">
            </button>
        </div>
        </div>`;
    });
}

if (cartNo) {
    add();
}

let totalItemOrder = document.getElementById("totalItemOrder");
let totalCost = document.getElementById("totalCost");

// Initialize total values
let totalItems = 0;
let totalPrice = 0;

// Event delegation for plus and minus buttons
show.addEventListener('click', (event) => {
    if (event.target.classList.contains('plusbtn') || event.target.classList.contains('minusbtn')) {
        const index = event.target.dataset.index;
        const numElement = document.querySelector(`.num[data-index="${index}"]`);
        let num = parseInt(numElement.innerText);
        const priceElement = document.querySelectorAll('.price')[index];
        const itemPrice = parseFloat(priceElement.innerText.slice(4));

        if (event.target.classList.contains('plusbtn')) {
            num++;
            totalItems++;
            totalPrice += itemPrice;
        } else if (event.target.classList.contains('minusbtn') && num > 0) {
            num--;
            totalItems--;
            totalPrice -= itemPrice;
        }

        numElement.innerText = num;
        totalItemOrder.innerText = totalItems;
        totalCost.innerText = totalPrice.toFixed(2);
    }
});

let addToCart = document.querySelectorAll(".addToCart");
if (addToCart) {
    addToCart.forEach((button, index) => {
        button.addEventListener("click", () => {
            let cartImg = document.querySelectorAll(".cartImage")[index];
            let cartName = document.querySelectorAll(".cartName")[index];
            let cartPrice = document.querySelectorAll(".cartPrice")[index];
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







if (document.querySelector(".slide-content")) {
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
        breakpoints: {
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
