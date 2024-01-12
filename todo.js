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
        const li = document.createElement("div");
        const list = document.createElement("span");
        const check = document.createElement("input")
        check.type="checkbox";
        //<li><span></span></li>
        li.appendChild(list);

        li.style.borderBottom="solid 2px white";
        lst.style.padding="10px"; // list에 요소가 있을 때만 padding이 적용되게


        //checkbox 생성
        li.appendChild(check);
        //checkbox style 속성
        check.style.position="relative";
        check.style.float="left";
        check.style.top="6.5px";
        check.style.zoom="2.2";
        check.style.cursor="pointer";
        check.style.accentColor="rgba(121, 121, 121, 0.5)";

        //체크하면 글씨 연하게
        check.addEventListener("click", function(){
            if (check.checked){
                list.style.color="rgb(155, 155, 155)";
            } else{
                list.style.color="black";
            }
        })

        //list에 글씨 넣기
        list.innerText = input.value;
        //li.style.border="solid 0.5px rgba(255, 255, 255, 0.668)";
        
        //입력창 비우기
        input.value = "";

        //삭제 버튼
        const del = document.createElement("button");
        del.innerText = "X";
        li.appendChild(del);

        //del 버튼 style 속성
        del.style.fontSize="30px";
        del.style.float="right";
        del.style.position="relative";
        del.style.top="17px";
        del.style.right="10px";
        del.style.backgroundColor= "rgba(169, 188, 203, 0.752)";
        del.style.border="none";
        del.style.cursor="pointer";

        //del 버튼 mouseover/mouseout시 반응
        del.addEventListener("mouseover", function(){
            del.style.backgroundColor="rgba(51, 64, 75, 0.752)";
            del.style.color="white";
        })
        del.addEventListener("mouseout", function(){
            del.style.backgroundColor="rgba(169, 188, 203, 0.752)";
            del.style.color="black";
        })

    
        //위의 것들을 lst(div) 에 넣기
        lst.appendChild(li);
    }
})


