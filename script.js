var urlParams = new URLSearchParams(window.location.search);

document.querySelector("#name").textContent = "Your name is:" + urlParams.get("name");
let psw = document.querySelector("#psw");
psw.textContent = "Your password is:" + urlParams.get("psw");
psw.style.color = "red";

let pt = document.querySelector("#pt");
pt.src = urlParams.get("pt");
