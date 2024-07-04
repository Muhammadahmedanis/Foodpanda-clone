document.addEventListener("DOMContentLoaded", () => {
    let addToCart = document.getElementById("addToCart");
    if(addToCart) {
        addToCart.addEventListener("click", () => {
            let cartNo = document.getElementById("cartNo");  
            let cartImg = document.getElementById("cartImg");
            let cartName = document.getElementById("cartName");
            let cartPrice = document.getElementById("cartPrice");

            let carts = [];

            let cart = {
                img: cartImg.src,
                name: cartName.innerText,
                price: cartPrice.innerText,
            }
            carts.push(cart);
            localStorage.setItem("cartData", JSON.stringify(carts));
            cartNo = document.getElementById("cartNo");
            cartNo.innerText = carts.length;
        });

        let getCart = localStorage.getItem("cartData");
        if(getCart != null) {
            let carts = JSON.parse(getCart);
            console.log(carts);
            let show = document.getElementById("showAddToCart");
            carts.map((val) => {
                console.log(val);
                show.innerHTML += `
                <div class="img5">
                    <img class="h-100 w-100" src="${val.img}" alt="">
                </div>
                <p class="cartp">${val.name}</p>
                <p class="cartp">${val.price} Rs</p>
                <div class="d-flex flex-md-row">
                    <div class="d-flex cartbtns">
                        <button id="minusbtn" class="cartbtn">-</button>
                        <p id="num">0</p>
                        <button id="plusbtn" class="cartbtn">+</button>
                    </div>
                    <button class="cartbtn">
                        <img class="ps-3" src="./images/trash-2.svg" alt="">
                    </button>
                </div>`;
            });
        }
    }
});






let totalItemOrder =  document.getElementById("totalItemOrder");
let totalCost = document.getElementById("totalCost");
var num = document.getElementById("num");
var plusbtn = document.getElementById("plusbtn");
let i = 1;
if(plusbtn){
    plusbtn.addEventListener("click", () =>{
        num.innerHTML = i;
        totalItemOrder.innerHTML = i;
        totalCost.innerHTML = i * 
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







if(true){
    document.addEventListener("DOMContentLoaded", () => {
        const loaderProgress = document.querySelectorAll(".loader-container");
        let width = 0;
        let pro = setInterval(() => {
            width++;
        //     loaderProgress[0].style.width = width + "%";
        // loaderProgress[1].style.width = width + "%";
        if(width >= 100)
            {
                clearInterval(pro)
            }
     }, 100)
     
})
}





var swiper = new Swiper(".slide-content", {
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



