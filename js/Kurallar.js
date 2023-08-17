// DEĞİŞKENLER////////////////////////////////

//DEĞİŞKEN TANIMLAMA KURALLARI //////////////////////////////////

//Değişken isimleri Rakam ile başlayamaz.
//Kullandığımız komutlar değişken ismi olamaz.
//Boşluk Yerine _ KULANILIR.
//CONS ile olışturulursa değişime izin vermez


//DEĞİŞKEN TÜRLERİ
//PRİMİTİVE TYPES

//STRİNG    
let firstName = "oguz";
console.log(typeof firstName)

//NUMBER

let age = 30;
console.log(typeof age)

// Boolean

let kredi_kullanimi = false;
console.log(typeof kredi_kullanimi)

//Undefined

let phone;
console.log(typeof phone)

//REFERENCE TYPES : OBJECTS

let liste = ["aslı", "oguz", "kerem"]
console.log(typeof liste)

//Object Literals : OBJECTS

let address = {
    city: "istanbul",
    country: "Türkiye",
}
console.log(typeof address)

//FONKSİYON
var hesapla = function() {
    return 0;
}
console.log(typeof hesapla)

//OPERATÖRLER
//1 ARİTMETİK

let veri;
const a = 20;
const b = 10;
const c = 5;
veri = a - b;
veri = a + b;
veri = a * b;
veri = a / b;


//2 Atama Operatörleri
veri = a;
veri += a; // veri = veri + a
veri -= a; // veri = veri - a
veri *= a; // veri = veri * a
veri /= a; // veri = veri / a

//3 KARŞILAŞTIRMA OPERATÖRLERİ
veri = a == b; // A B YE EŞİT 
veri = 5 === "5"; // A B TÜRLERİNİ KARŞILAŞTIRIR
veri = a != b; // A B YE EŞİT DEĞİL
veri = a > b;
veri = 5 >= 5;

// 4MANTIKSAL OPERATÖRLER

// && (and)

veri = (a > b) && (a > c)

// || OR veya
veri = (b > a) || (b < c)

// ! not
veri = !(a > b)

console.log(veri)


//ZAMAN OBJELERİ

let zaman = new Date();
let birthday = new Date(1999, 2, 26);

//GET METHODS
console.log(zaman.getMonth())
console.log(zaman.getDay())
console.log(zaman.getSeconds())
console.log(zaman.getFullYear())
console.log(zaman.getMinutes())
console.log(zaman.getHours())

//SET METHODS Değiştirme imkanı sağlar
zaman.setDate(25);
zaman.setFullYear(2024);
zaman.setMonth(3);


console.log(zaman.getFullYear() - birthday.getFullYear());

console.log(zaman)