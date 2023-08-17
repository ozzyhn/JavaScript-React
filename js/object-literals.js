// dizilerden daha verimli saklama yapar
let veri;
let user = {
    userName: "leventert",
    firstName: "levent",
    lastName: "ertunalılar",
    age: 36,
    hobbies: ["gym", "spor", "kızlar"],
    address: {
        city: "Kırıkkale",
        country: "Türkiye",
        tel: "05074219475",
    }
}

veri = user;
veri = user.lastName;
veri = user.firstName;
veri = user.address.city;
veri = user.address.country;

console.log(veri);
console.log(typeof user);