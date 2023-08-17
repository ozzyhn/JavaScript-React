const cardheader = document.querySelector(".class-cardheader");

const h2 = document.createElement("h2");

h2.setAttribute("class", "card-header");
h2.appendChild(document.createTextNode("yeni listeler"));


const parent = document.querySelector(".card");
parent.replaceChild(h2, cardheader);


//class güncelleme

const tasklist = document.querySelector("#task-list");

let value;

link = tasklist.children[0].children[0];

value = link.className;
value = link.classList;

link.classList.add("new");
linkc.classList.remove("new");


//attribute güncelleme

value = link.getAttribute("href", "");
value = link.setAttribute("href", "https");
value = link.hasAttribute("href");