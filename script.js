let body = document.querySelector("body");
let containerDiv = document.createElement("div");
containerDiv.classList.add("board");
let blockDivs = [];
for(let i = 0; i < 16; i++) {
    blockDivs[i] = document.createElement("div");
    blockDivs[i].addEventListener("mouseover", () => {
        blockDivs[i].style.backgroundColor = "red";
    })
    blockDivs[i].classList.add("cell");
    containerDiv.appendChild(blockDivs[i]);
}

body.appendChild(containerDiv);

