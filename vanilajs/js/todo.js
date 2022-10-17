const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; //배열 선언 const로 하면 입력 후 새로고침을 하면 전에 저장된 값이 다시 값이 사라지지만 
                //let으로 선언 후 l.55처럼 해주면 값을 그래도 불러오면서 저장할 수 있다.

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //localStorage의 key(todos)에 배열 toDos 값을 넣어준다.
                                                            //JSOM.stringify() : ()안의 객체를 string으로 만들어준다. 
}

function deleteToDo(event){ //event를 이용해 어떤 button을 눌렀는지 알 수 있다.
    const li =  event.target.parentElement; //.parentElement는 target인 button의 부모인 해당<li>테그이다. 
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //삭제버튼을 클릭한 li.id와 다른 todo는 남긴다.(=버튼클릭시 삭제)
    saveToDos();

}

function paintToDo(newTodo) {
  const li = document.createElement("li"); //<li>
  li.id = newTodo.id;
  const span = document.createElement("span"); //<span>
  span.innerText = newTodo.text; // <span> -> text // object를 받기 때문에 .text를 붙여준다.

  const button = document.createElement("button"); //<button>
  button.innerText = "delete"; //<button> -> "delete"
  button.addEventListener("click", deleteToDo)
  li.appendChild(span);
  li.appendChild(button); //list에 button 추가
  toDoList.appendChild(li); //<li>에 toDoList추가
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = { //todo값에 id값을 준다.
    text : newTodo,
    id: Date.now(), //id는 리스트 각각의 item을 구별하기 위해 사용된다.
  };
  toDos.push(newTodoObj); //toDos 배열에 newTodo를 push한다.
  paintToDo(newTodoObj); //text:newTodo를 주지 않고 newTodoObj를 준다.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(item){
//   console.log("this is the turn of", item);
// } 
//
// (itme)=> console.log("thist is the turn of", item)
////위에 함수 sayHello()와 기능, 속도가 같지만 아래 =>함수를 사용하면 따로 함수 이름을 지정해주지 않아도 된다.

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
