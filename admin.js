
// Cart Section
let fastFoodSec = document.getElementById("fastFoodSec");
let adminFastFoodSec = document.getElementById("adminFastFoodSec");

let cartArr = JSON.parse(localStorage.getItem("storeCardData")) || [];
const displayItems = () => {
    cartArr.filter((cartVal, ind) => {
        if (cartVal.id === "fastfood") {
            if (fastFoodSec) {
                fastFoodSec.innerHTML += `
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
            else if (adminFastFoodSec) {
                adminFastFoodSec.innerHTML += `
                        <div id=card-${ind} class="homeCardSec rounded mb-2">
                            <div class="cardImg">
                            <img class="rounded h-100 w-100" src="${cartVal.img}"alt="">
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
                                <div>
                                    <button onclick = "delFunc(${ind})" class="adminDelBtn">Delete</button>
                                    <button onclick = "showEditModal(${ind})" class="adminUpdBtn">Update</button>
                                </div>
                        </div>`
            }

        }
        else if (cartVal.id === "icecream") {
            let icecreamSec = document.getElementById("icecreamSec");
            let adminIcecreamSec = document.getElementById("icecreamSec");
            if (icecreamSec) {
                icecreamSec.innerHTML += `
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
            else if (adminIcecreamSec) {
                adminIcecreamSec.innerHTML += `
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
                                <div>
                                    <button onclick = "delFunc(${ind})" class="adminDelBtn">Delete</button>
                                    <button onclick = "updFunc(${ind})" class="adminUpdBtn">Update</button>
                                </div>
                    </div>`
            }

        }
        else if (cartVal.id === "beverage") {
            let beverageSec = document.getElementById("beverageSec");
            let adminBeverageSec = document.getElementById("beverageSec");
            if (beverageSec) {
                beverageSec.innerHTML += `
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
            else if (adminBeverageSec) {
                adminBeverageSec.inner += `
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
                                <div>
                                    <button onclick = "delFunc(${ind})" class="adminDelBtn">Delete</button>
                                    <button onclick = "updFunc(${ind})" class="adminUpdBtn">Update</button>
                                </div>
                    </div>`
            }
        }

    })
}
if (cartArr) {
    displayItems();
}

// delFunc
function delFunc(ind) {
    let cardElement = document.getElementById(`card-${ind}`);
    console.log(cardElement);
    if (cardElement) {
        cartArr.splice(ind, 1);
        localStorage.setItem("storeCardData", JSON.stringify(cartArr));
        cardElement.remove();
    }
}

// updFunc
let editInd;
function showEditModal(ind) {
    editInd = ind;
    const card = cartArr[ind];
    document.getElementById("editCardId").value = card.id;
    document.getElementById("editCardImg").value = card.img;
    document.getElementById("editCardTitle").value = card.title;
    document.getElementById("editCardReview").value = card.review;
    document.getElementById("editCardOrder").value = card.orders;
    document.getElementById("editCardPrice").value = card.price;
    document.getElementById("editCardDescription").value = card.des;
    const modal = new bootstrap.Modal(document.getElementById('editModal'));
    modal.show();
}


let updCardBtn = document.getElementById("updateCard");

let Upd = () => {
    const cardNewId = document.getElementById("editCardId").value;
    const cardNewImg = document.getElementById("editCardImg").value;
    const cardNewTitle = document.getElementById("editCardTitle").value;
    const cardNewReview = document.getElementById("editCardReview").value;
    const cardNewOdrer = document.getElementById("editCardOrder").value;
    const cardNewPrice = document.getElementById("editCardPrice").value;
    const cardNewDec = document.getElementById("editCardDescription").value;

    if(cardNewId.trim().length !=0 && cardNewImg.trim().length !=0 && cardNewTitle.trim().length !=0 && cardNewReview.trim().length !=0 && cardNewOdrer.trim().length !=0 && cardNewPrice.trim().length !=0 && cardNewDec.trim().length !=0){
        cartArr[editInd] = {
            id: cardNewId,
            img: cardNewImg,
            title: cardNewTitle,
            review: cardNewReview,
            orders: cardNewOdrer,
            price: cardNewPrice,
            des: cardNewDec,
        }
        localStorage.setItem("storeCardData", JSON.stringify(cartArr));
        adminFastFoodSec.innerHTML = '';
        // adminIcecreamSec.innerHTML = '';
        // adminBeverageSec.innerHTML = '';
        displayItems()
    }
}

if(updCardBtn)
{
    updCardBtn.addEventListener("click", Upd);
}



let addItem = document.getElementById("addItem");
if (addItem) {
    addItem.addEventListener("click", () => {
        let prodId = document.getElementById("prodId");
        let prodImg = document.getElementById("prodImg");
        let prodTitle = document.getElementById("prodTitle");
        let prodReview = document.getElementById("prodReview");
        let prodOrders = document.getElementById("prodOrders");
        let prodPrice = document.getElementById("prodPrice");
        let prodDes = document.getElementById("prodDes");

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
        prodId.value ='';
        prodImg.value ='';
        prodTitle.value ='';
        prodReview.value ='';
        prodOrders.value ='';
        prodPrice.value ='';
        prodDes.value ='';

        adminFastFoodSec.innerHTML = '';
        adminIcecreamSec.innerHTML = '';
        adminBeverageSec.innerHTML = '';
        displayItems();
    })
}
