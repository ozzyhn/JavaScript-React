const li = document.createElement("li");



// add class 

li.classname = "list-group-item list-group-item-secondary";

// attribute

li.setAttribute("title", "new item");

const text = document.createTextNode("new item");

li.appendChild(text);

const a = document.createElement("a");

a.setAttribute("href", "");

a.className = "a sınıfı";
a.id = "a";
a.innerHTML = '<i> class=" fas fa - time "></i>';


li.appendchild(a);

document.querySelector("#task-list").appendchild(li);


console.log(li);