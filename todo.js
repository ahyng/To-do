//btn:+버튼, input:입력창, lst:입력한 것들 표시할 공간
let btn = document.getElementById('btn');
let input = document.getElementById('input');
let lst = document.getElementById('lst');

//버튼을 눌렀을 때
btn.addEventListener("click", function add() {
    if (input.value == ''){ // 입력창이 비어있다면
        alert("내용을 입력해 주세요.")
    } else {
        //새로운 li, span 생성
        const li = document.createElement("li");
        const list = document.createElement("span");
        //<li><span></span></li>
        li.appendChild(list);
        //list에 글씨 넣기
        list.innerText = input.value;
        //위의 것들을 lst(div) 에 넣기
        lst.appendChild(li);
        //입력창 비우기
        input.value = "";
    }
})


