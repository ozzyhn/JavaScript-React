// arrays

let names = ["arda", "kerem", "aslı", "mert"];

let years = [2005, 2009, 2006, 2010];

let mix = ["arda", "yılmaz", 25, 1990, ["futbol", "GYM"]];
console.log(names);
console.log(names.length);

console.log(years.length);
console.log(mix);


//GET ARRAY İTEM

console.log(names[0]);
names[0] = "oguz";
names[4] = "eren";
names[names.length] = "deli";

//ADD İTEM

names.push("eda");
console.log(names);

names.unshift("eda");


//REMOVE İTEM
years.pop();
console.log(years);

years.shift();
console.log(years);

//ELAMANI ARAMAK - indexOf

let index = names.indexOf("eda");
console.log("index: " + index);

names.reverse();
console.log(names);

//ELEMANLARI SIRALAMA SORT

years.sort();
console.log(years);

names.sort();
console.log(names);

//BİRLEŞTİRME

let veri = names.concat(years);
console.log(veri);

//Splice
names.splice(2, 0, "ahmet");
console.log(names);

names.splice(2, 1, "selim");
console.log(names);