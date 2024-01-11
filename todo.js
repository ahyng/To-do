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
    create.innerHTML = input.value + "&nbsp;";
    del.innerHTML = "X";
    lst.appendChild(create);
    create.appendChild(del);
    input.value = "";
    create.style.cursor="pointer";
    del.style.cursor="pointer";

    create.addEventListener("click", function() {
        create.style.color="#c2c2c2";
    })

    }
})


