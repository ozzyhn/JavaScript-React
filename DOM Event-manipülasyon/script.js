// let veri;

// veri = window.document;
// veri = window.document.head;
// veri = window.document.body;
// veri = nwindow.document.URL;


// console.log(veri);

// Element seçimi

// let veri;
// // veri = document.getElementById("header");
// // veri = document.getElementById("header").id;
// // veri = document.getElementById("header").className;
// // // veri = veri.classname;
// // veri = document.getElementById("header");

// // veri.style.color = "blue";
// // veri.style.fontSize = "50px";
// // // veri.style.fontWeight = "bold";
// // // veri.style.display = "none";

// // document.getElementById("header").innerText = "Yapılacaklar";
// // document.getElementbyıd("header").innerText = "<b> ToDo List </b>";
// // document.getelementbyıd("header").innerHTML = "<b> ToDo List </b>";

// // console.log(veri);


// //document.qerySelector() metodu

// // console.log(document.querySelector("#header"));
// // console.log(document.querySelector(".card-header"));


// // document.querySelector("li").style.color = "blue";
// // document.querySelector("li:last-child").style.color = "red";


// document.querySelector("li").className = "list-group-item  list-group-item-primary";





//çoklu element seçimiento  

let veri;

// veri = document.getElementsByClassName("list-group-item");

// veri = document.getElementsByClassName("list-group-item")[0];


// // veri = veri[2];

// veri[1].style.fontsize = "30px";
// veri[2].textContent = "merhaba";

// for (let i = 0; i < veri.length; i++) {
//     console.log(veri[i].style.color = "orange");
//     console.log(veri[i].textContent = "new item");
// }



//document.getelementbytakename kullanımı

// veri = document.getElementsByTagName("li");
// veri = document.getElementsByTagName("a");


// veri = document.getElementById("task-list").getElementsByTagName("a");

//document.querySelectorAll()

// veri = document.querySelectorAll("li");

// veri.forEach(function(item, index) {
//     item.textContent = `${index}- item`;
// });


// console.log(veri);




//ELEMENTLER ÜZERİNDE GEZİNME


let value;


const todoList = document.querySelector(
    ".list-group");

const todo = document.querySelector(".list-group-item:nth-child[2]");
const card = document.querySelector(".card");


value = todoList;
value = todo;
value = card;

// CHİLD NODES

value = todoList.childNodes;
value = todoList.children;
value = todoList.children[1].textContent = "degiştir";

value = card;
value = card.children;
value = card.children[1].children[0].textcontent = "merhaba";

value = card.parentElement.parentElement;


value = todo;
value = todo.previousElementSibling;
value = todo.nextElementSibling;