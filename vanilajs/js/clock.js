const clock = document.querySelector("h2#clock")

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    
}
getClock();
setInterval(getClock, 1000);

//setTimeout(sayHello, 5000); //sayHello 함수를 5000ms시간 이후에 실행한다.
//setInterval(sayHello, 5000); //sayHello 함수를 5000ms속도로 반복한다.

