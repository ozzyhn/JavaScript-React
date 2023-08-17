//STRİNGS

const firstname = "oguzhan";
const lastname = "abar";
const age = 23;
let hobbies = "formula1 sinema gym";

let veri;

veri = firstname + " " + lastname + " " + age;
veri += "abar";
veri = '' + firstname + '' + lastname + '' + age + '  KK /yaşıyorum';

veri = firstname.concat(' ', lastname);

veri = veri.toUpperCase();
veri = veri.toLowerCase();

veri = veri.substring(3, 7);

veri = veri.indexOf("o");

veri = veri.replace('abar', 'cakırca');

veri = veri.lenght;

veri = hobbies.split(' ');

console.log(veri);