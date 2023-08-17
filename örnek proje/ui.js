function UI() {

    //PROTOTYPE buraya yazılacak



}

//PROTOTYPE KALITIMINA EKLEDİK
UI.prototype.addCarToUI = function(newCar) {



    const carList = document.getElementById("cars");
    carList.innerHTML += `
     <tr>
    <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
    <td>${newCar.title}</td>
    <td>${newCar.price}</td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
  </tr>
     `


}

//CLEAR KISMI İÇİN FONKSİYON OLUŞTURUYORUZ
UI.prototype.clearInputs = function(element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
}

UI.prototype.displayMessages = function(message, type) {

    const cardBody = document.querySelector(".card-body");
    //ALERT DİVİ OLUŞTURMA
    const di = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    // div cocu gu olarak append child ile ekledik
    cardBody.appendChild(div);

    //BELİRLİ ZAMAN SONRA ÇALIŞMASI İÇİN HAZIR FONK ALIYORUZ

    setTimeout(function() {
        did.remove();
    }, 2000)

}


UI.prototye.loadAllCars = function(cars) {
    const carList = document.getElementById("cars"); // İLK ETAPTA CLASSI SEÇİYORUZ  
    // her aracı almak için FOREACH İLE GEZİYORUZ
    cars.foreach(function(car) { //+= KULLANMA SEBEBİ DEĞİŞTİRME DEĞİL İLAVE OLDUGU İÇİN
        carList.innerHTML += `
        <tr>
       <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
       <td>${car.title}</td>
       <td>${car.price}</td>
       <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
     </tr>
        `

    });

    UI.prototype.deleteCarFromUI = function(element) {
        element.parentElement.parentElement.remove(); //ÜSTEKİ ELEMENTE ULAŞMAK İÇİN PARENTELEMENT KULLANDIK SONRA SİLMEK İÇİN REMOVE() YAPTIK
    }
}
UI.prototype.clearAllCarsFromUI = function() {
    //ARAÇ LİSTESİ SEÇMEK LAZIM
    const carList = document.getElementById("cars");

    //ARAÇLAR TR OLARAK SIRALANIYOR FİRSTCHİLD SİLEREK KOLAY YAPILABİLİR
    while (carList.firstElementChild !== null) {
        carList.firstElementChild.remove();
    }


}