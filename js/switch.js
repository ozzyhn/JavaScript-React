let islem = 1;


switch (islem) {
    case 1:
        console.log("1.noldu işlem");
        break;
}
switch (islem) {
    case 2:
        console.log("1.noldu işlem");
        break;
}
switch (islem) {
    case 3:
        console.log("1.noldu işlem");
        break;

    default:
        console.log("işlem yapılmadı");
}


let day;

switch (new date().getday() + 2) {
    case 0:
        day = "pazar";
        break;
    case 1:
        day = "pazartesi";
        break;

    case 2:
        day = "salı";
        break;

    case 3:
        day = "çarş";
        break;

    case 4:
        day = "perş";
        break;

    case 5:
        day = "cuma";
        break;

    case 6:
        day = "cmt";
        break;
}
console.log(day);


let hour = 16;

switch (true) {
    case hour >= 6 && hour <= 12:
        console.log("günaydın");
        break;
    case hour >= 13 && hour <= 17:
        console.log("iyi günler");
        break;
    case hour >= 18 && hour <= 24:
        console.log("iyi geceler");
        break;

    default:
        console.log("yanlış zaman");
}