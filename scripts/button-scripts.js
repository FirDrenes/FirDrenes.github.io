var changeUserBtn = document.querySelector('button');
var greeting = document.querySelector('h2');

function setUserName(){
    var name = prompt("Enter your name");
    localStorage.setItem('name', name);
    greeting.textContent = `Hello, ${name}`;
}

let storedName = localStorage.getItem('name');
if (storedName){
    greeting.textContent = `Hello, ${storedName}`;
}

changeUserBtn.onclick = setUserName;