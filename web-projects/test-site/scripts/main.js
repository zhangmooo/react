let myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼。");
});

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/guts.jpg") {
    myImage.setAttribute("src", "images/guts2.png");
  } else {
    myImage.setAttribute("src", "images/guts.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
   let myName = prompt( "请输入你的名字");
   localStorage.setItem("name", myName);
   myHeading.textContent = "Mozilla 酷毙了" + myName;}

if(!localStorage.getItem("name")){
   setUserName();
}else{
   ler storedName = localStorage.getItem("name");
   myHeading.textContent = "Mozilla 酷毙了，" + storedName;
}
myButton.onclick = function(){
  setUserName();
};