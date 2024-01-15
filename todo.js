//btn:+버튼, input:입력창, lst:입력한 것들 표시할 공간
let btn = document.getElementById('btn');
let input = document.getElementById('input');
let lst = document.getElementById('lst');

let i = localStorage.length;
if (i != 0){
    var todos = JSON.parse(localStorage.getItem('todos'));
    const savedTodoList = JSON.parse(localStorage.getItem('todos'));

    if (savedTodoList) { // 로컬에서 데이터 가져오기
        for(let i = 0; i < savedTodoList.length; i++){
            add(savedTodoList[i])
        }
    }
    i = todos.length;

    console.log(savedTodoList)
    
} else {
    var todos = [];
}

//enter 눌러도 버튼 누른 것과 동일하게 작용
document.getElementById("input").addEventListener("keyup", function(e) {
    if (e.code == "Enter") {
        if (input.value == ''){ // 입력창이 비어있다면
            alert("내용을 입력해 주세요.")
        } else {
            todos.push(input.value);
            add(input.value);
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }
});

btn.addEventListener("click", function create(){
    if (input.value == ''){ // 입력창이 비어있다면
        alert("내용을 입력해 주세요.")
    } else {
        todos.push(input.value);
        add(input.value);
        localStorage.setItem("todos", JSON.stringify(todos));
    }
});



//버튼을 눌렀을 때
function add(createOne) {
        //새로운 li, span 생성
        const li = document.createElement("div");
        const list = document.createElement("span");
        const check = document.createElement("input")
        check.type="checkbox";
        //<li><span></span></li>
        li.appendChild(list);

        li.style.borderBottom="solid 2px white";
        li.style.paddingTop="15px";
        li.style.paddingBottom="10px"; // li 에 padding 을 적용해야 일정하게 적용됨.(lst는 일정하게 적용이 안되는 것을 확인함)


        //checkbox 생성
        li.appendChild(check);
        //checkbox style 속성
        check.style.position="relative";
        check.style.float="left";
        check.style.top="0.5px";
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
        list.innerText = createOne;
     
        //li.style.border="solid 0.5px rgba(255, 255, 255, 0.668)";

        //localStorage.setItem(i, input.value);
        
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
        del.style.top="3px";
        del.style.right="10px";
        del.style.backgroundColor= "rgba(169, 188, 203, 0.652)";
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
        i += 1;

        // del 버튼 누르면 삭제
        del.addEventListener("click", function deleteList(event) {
            const deleteOne = event.target.parentElement;
            
            const arr = JSON.parse(localStorage.getItem("todos")) || [];
            const element = deleteOne.querySelector("span");
            const textToFind = element.textContent || element.innerText;
            const index = arr.findIndex(item => item === textToFind);

            deleteOne.remove();

            if (todos && todos.length > 0){
                todos.splice(index, 1);
            }
            savedTodoList = localStorage.setItem('todos', JSON.stringify(todos));

            i -= 1;
            if (i == 0){ //다 지웠을 때 padding 부분이 남지 않도록
                lst.style.padding="0px";
            }

        });
    }






