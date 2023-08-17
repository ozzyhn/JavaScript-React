// koşullu durumlar (if - else) 

const firstname = "cağla";
const username = "caglayilmaz";
const age = 20;
const isStudent = true;
const school = "university";


if (username == "caglayilmaz") {
    console.log("merhaba cagla");
} else {
    console.log("kullanıcı bulunamadı");
}

if (age === 20) {
    console.log("merhaba");

} else {
    console.log("yaşınız hatalı");
}

if (isStudent == true) {
    console.log("öğrencisinz")
} else {
    console.log("öğrenci değilsiniz");
}
if (age >= 18) {
    if (school == "university") {
        console.log("ehliyet alabilirisniz");
    } else {
        console.log("eğitim durumu eksik");
    }
} else {
    console.log(" yaşın yeterli değil")
}