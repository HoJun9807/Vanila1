const loginForm = document.querySelector("#login-form");
const loginInput =  document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden"; //반복되는 string은 변수로 지정해서 쓰면 오타를 방지 할 수 있다.
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); //브라우저의 기본 동작을 막아준다.
    loginForm.classList.add(HIDDEN_CLASSNAME); // login-form class에 style.css의 hidden속성을 추가한다.    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //localsStorage에 키값이 username인 
                                                //입력값(username)일 저장 할 수 있다
    //greeting.innerText = "Hello " + username; //index.html의 id가 greeting인 테그에 text를 추가한다.
    //greeting.innerText = `Hello ${username}`; //``안에는 ${}값을 불러 올 수있다.
    //greeting.classList.remove(HIDDEN_CLASSNAME); //hidden 속성을 지워준다.
    paintGreetings(username);
}

// function handleLinkClick(event){
//     event.preventDefault(); 
// }
//link.addEventListener("click", handleLinkClick);

function paintGreetings(username){
    //loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

}else{
    
    paintGreetings(savedUsername);

}