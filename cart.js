var num = document.getElementById("num")
var plusbtn = document.getElementById("plusbtn");
let i = 1;
plusbtn.addEventListener("click", () =>{
    num.innerHTML = i;
    i++;
})

var minusbtn = document.getElementById("minusbtn");
minusbtn.addEventListener("click", () => {
    if(i != 0)
    {
        i--;
        num.innerHTML = i;
    }
})