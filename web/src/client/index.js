
const elem = document.getElementsByTagName('body');
const p = document.createElement("p");
p.innerText = "Hello, World";

elem[0].appendChild(p);
