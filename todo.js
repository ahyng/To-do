let btn = document.getElementById('btn');
let input = document.getElementById('input');
let lst = document.getElementById('lst');

btn.addEventListener("click", function add() {
    let create = document.createElement("li");
    create.innerHTML = input.value;
    lst.appendChild(create);
    input.value = "";
})