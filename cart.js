var num = document.getElementById("num")
var plusbtn = document.getElementById("plusbtn");
let i = 1;
if(plusbtn){
    plusbtn.addEventListener("click", () =>{
        num.innerHTML = i;
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
            }
        })
}


document.addEventListener("DOMContentLoaded", () => {
    const loaderProgress = document.querySelectorAll(".loader-container");
    let width = 0;
     let pro = setInterval(() => {
        width++;
        loaderProgress[0].style.width = width + "%";
        loaderProgress[1].style.width = width + "%";
        if(width >= 100)
            {
                clearInterval(pro)
            }
     }, 100)
     
})