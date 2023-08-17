// FORMU SEÇMEMİZ GEREKİYOR

const form = document.getElementById("car-form");
const titleElement = document.querySelector("#car-title");
const priceElement = document.querySelector("#price-element");
const urlElement = document.querySelector("url");
const cardBody = document.querySelectorAll(".card-body")[1]; //1. ELEMANI SEÇMEK İÇİN 2. İNDEXİ KULLANDIK 
const clear = document.getElementById("clear-cars"); // TEMİZLENİLECEK YERİ SEÇTİK

//UI Objesini başlatma

const ui = new UI();

const storage = new Storage();

// TÜM eventleri yükleme

eventListeners();

function eventListeners() {
    //ARAC EVENTİNİ EKLEME İÇİN OLUŞTURDUK SUBMİT YANI GİİRLEN DEĞER VE ADD CAR FONKSİYONU

    form.addEventListener("submit", addCar);


    document.addEventListener("DOMContentLoaded", function() {
        let cars = storage.getCarsFromStorage();
        ui.loadAllCars(cars); //TÜM ARAÇLARI ARRAY ŞEKLİNDE EKLEME FONKSİYONU
    });
    cardBody.addEventListener("click", deleteCar);
    clear.addEventListener("click", clearAllCars);
}

function addCar(e) {
    // DEĞERLERİMİZİ ALINAN KISIM
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    // değer girilmediği zaman hata versin

    if (title === null & price === null & url === null) {
        //HATA MESAJI
        ui.displayMessages("TÜM ALANLARI DOLURUN", "danger");
    } else {
        //CAR CONSTRUCTORU kullanılacak
        const newCar = new Car(title, price, url);


        //ARAYÜZE ARAÇ EKLEME
        ui.addCarToUI(newCar);

        storage.addCarToStorage(newCar); // Storage araç ekledik


        ui.displayMessages("ARAÇ EKLENDİ", "success"); //BAŞARIYLA EKLENDİ MESAJI
    }
    //TEMİZLEME FONKSİYONU İLE DEĞERLERİ TEMİZLEYECEĞİZ
    ui.clearInputs(titleElement, urlElement, priceElement);

    //SAYFA YENİLENMESİN DİYE KULLANDIK
    e.prevenetDefault();

}
//ARABALARI SİLME FONKSİYONU
function deleteCar(e) {
    if (e.target.id = "delete-car") { //ARACI SİL BUTONUNA TIKLANIP TIKLANAMDIGI İÇİN İD SİNE BAKIP SORGULATTIK
        UI.deletecarfromUI(e.target);


        storage.deleteCarFromStorage(e.target.parentElement.parentElement.previousElementSibling.textContent);
        //Elemanın elemanına ordan onun öncesindeki elemanın TEXTİNE Ulaşıyoruz

        ui.displayMessages("Başarıyla Silindi", "success");

    }

}

function clearAllCars() {

    if (confirm("Tüm araçlar silinecek emin misinzi?")) { //SİLİNECEK MESAJI SORMAK İÇİN KOYDUK
        ui.clearAllCarsFromUI(); //ARAYÜZDEN SİLMEMİZ İÇİN
        storage.clearAllCarsFromStorage(); //STORAGE DEN SİLMEK İÇİN

    }

}