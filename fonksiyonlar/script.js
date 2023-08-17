// function merhaba() {
//     console.log("merhaba")
// }
// merhaba();




// function merhaba(name, age) {
//     console.log(`ad:${name} yas:${age}`);
// }
// merhaba("oguzhan", 23);


function yashesap(dogumYili) {
    return 2021 - dogumYili;
}
let ageesra = yashesap(1990);
let ageali = yashesap(2000);

console.log(ageesra, ageali);


function ehliyetalma(dogumYili, isim) {
    let yas = yashesap(dogumYili);
    let ehliyet = 18 - yas;

    if (ehliyet > 0) {
        console.log(`${isim} ehliyet alabilmen için: ${ehliyet}`);
    } else {
        console.log("ehliyet alabilirsiniz.")
    }
}
ehliyetalma(1990, "esra");
ehliyetalma(2000, "Ali");