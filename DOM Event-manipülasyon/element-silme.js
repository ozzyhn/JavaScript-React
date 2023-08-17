const taskList = document.querySelector("#task-list");


// taskList.remove();

taskList.childNodes[2].remove();

taskList.children[2].remove();

taskList.remove(taskList.children[0]);


//attribute silme

taskList.children[1].removeAttribute("class")


for (let i = 0; i < taskList.lenght; i++) {
    taskList.children[i].removeAttribute("class");

}