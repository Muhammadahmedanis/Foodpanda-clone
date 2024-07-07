let orderUserName = document.getElementById("orderUserName");
let orderUserNo = document.getElementById("orderUserNo");
let orderUserAdd = document.getElementById("orderUserAdd");
if (!window.isDOMLoaded) {
    window.isDOMLoaded = false;
    document.addEventListener("DOMContentLoaded", () => {
        window.isDOMLoaded = true;
        const loaderProgress = document.querySelectorAll(".loader-container");
        let orderbtn = document.getElementById("orderbtn");
        if (orderbtn) {
            orderbtn.addEventListener("click", () => {
                if (orderUserName.value.trim().length != 0 || orderUserNo.value.trim().length != 0) {
                    let userOrderDetail = {
                        OuserName: orderUserName.value,
                        OuserNo: orderUserNo.value,
                        OuserAdd: orderUserAdd.value,
                    }
                    
                    order.push(userOrderDetail);
                    sessionStorage.setItem("orderData", JSON.stringify(userOrderDetail));

                    let width1 = 0;
                    let width2 = 0;
                    let pro1 = setInterval(() => {
                        width1++;
                        loaderProgress[0].style.width = width1 + "%";
                        if (width1 >= 100) {
                            clearInterval(pro1);
                            Swal.fire({
                                title: "Deleiver to rider",
                                icon: "success"
                              });
                            let pro2 = setInterval(() => {
                                width2++;
                                loaderProgress[1].style.width = width2 + "%";
                                if (width2 >= 100) {
                                    clearInterval(pro2);
                                    Swal.fire({
                                        title: "Deleiver to Customer",
                                        icon: "success"
                                      });
                                }
                            }, 100)
                        }
                    }, 100)
                    }
                    else {
                        Swal.fire({
                          title: "Missing?",
                          text: "Enter your Details",
                          icon: "question"
                        });
                        }
            })
        }
    })
}

let order = JSON.parse(sessionStorage.getItem("orderData")) || [];
console.log(order);


