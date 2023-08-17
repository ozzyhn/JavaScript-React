const card = document.querySelector(".card");
const container = document.querySelector(".container");

card.addEventListener("click", function(e) {
    console.log("card");
    //Bubbling engellemek için aşşağdaki kod satırı
    e.stopPropagation();
})

container.addEventListener("click", function() {
    console.log("container");

    //CAPTURİNG için aşşağdaki satırı TRUE yapmamız yeterli
}, true)

const ul = document.querySelectorAll(".ul");


// ELEMEN SİLME İŞLEMİ İF İLE YAPTIK
// 2 KEZ PARENT ELEMENT YAZMAMIZIN SEBEBİ İSE ELEMANIN ELEMANINA ULAŞMAK İSTEMEMİZ

ul.addEventListener("click", function() {
    console.log(e.target.className);
    if (e.target.className === "fas fa-times") {
        e.target.parentElement.parentElement.remove();
    }
})