let btn = document.getElementById('btn');
let input = document.getElementById('input');
let lst = document.getElementById('lst');

btn.addEventListener("click", function add() {
    if (input.value == ''){
        alert("내용을 입력해 주세요.")
    } else {
    let create = document.createElement("li");
    let del = document.createElement("button");
    del.style.fontSize="40px";
    create.innerHTML = input.value + " ";
    del.innerHTML = "X";
    lst.appendChild(create);
    create.appendChild(del);
    input.value = "";
    }
})