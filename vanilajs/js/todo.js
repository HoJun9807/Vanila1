const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event){ //event를 이용해 어떤 button을 눌렀는지 알 수 있다.
    const li =  event.target.parentElement; //.parentElement는 target인 button의 부모인 해당<li>테그이다. 
    li.remove();

}

function paintToDo(newTodo) {
  const li = document.createElement("li"); //<li>
  const span = document.createElement("span"); //<span>
  span.innerText = newTodo; // <span> -> text

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
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
