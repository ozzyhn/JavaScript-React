const btn = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#task-list");



//click event 

btn.addEventListener("click", run);
ul.addEventListener("click", run);

function run(event) {
    console.log(`event type: ${event.type}`);
}

//mouse leave event

ul.addEventListener("mouseleave", run);

//// listelemede kullanılır enter-leave ile aynı
ul.addEventListener("mouseover", run);

//her üstüne gelinmede çalılır
ul.addEventListener("mouseenter", run);

// listelemede kullanılır enter-leave ile aynı
ul.addEventListener("mouseout", run);