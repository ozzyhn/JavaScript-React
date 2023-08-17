//LOCAL STORAGE EKLEME

function Storage() {
    Storage.prototype.addCarToStorage = function(newCar) { // add car to storage fonksiyonu ile araba ekledik

        let cars = this.getCarsFromStorage();

        cars.push(newCar); // Eklenmesi için push kullandık

        localStorage.setItem("cars", JSON.stringify(cars)); //LOCAL STORAGE BU ŞEKİLDE GÖNDEREBİLİRİZ O YÜZDEN BU ŞEKİL YAZDIK

    }

    Storage.prototype.getCarsFromStorage = function() {

        //// PROTOTYPE İLE OLUŞTURDUK BU STORAGE EKLEME FONKSİYONUNU BAŞK YERLERDE DE KULLANACAGIZ
        let cars;

        if (localstorage.getItem("cars") === null) {
            cars = [];

        } else {
            cars = JSON.parse(localstorage.getItem("cars")); //STORAGE BELİRLİ TİPTE ALDIGI İÇİN JSON İLE PARSELADIK
        }
        return cars;
    }

}

Storage.prototype.DeleteCarFromStorage = function(carTitle) {
    let cars = this.getCarsFromStorage(); // ARRAY DEN ARABALARI ALMA FONKSİYONUI

    cars.forEach(function(car, index) {

        cars.splice(index, 1); //SPLİCE METODU İLE İNDEX ELEMANINDAN 1 YANİ SADECE KENDİSİNİ SİLİYORUZ

        localstorage.setItem("cars", JSON.stringify(cars)); //Tekrardanb Ekleme İşlemini yaptık LOCAL STORAGE'A
    });


}


Storage.prototype.clearAllCarsFromStorage = function() {
    localStorage.removeItem("cars"); // Local Storage içerisindeki bütün cars keylerini siliyor
}