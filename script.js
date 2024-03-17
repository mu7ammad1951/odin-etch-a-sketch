let body = document.querySelector("body");
let containerDiv = document.createElement("div");
containerDiv.classList.add("board");
let blockDivs = [];
let rowDivs = [];

let i = 0;
for (let k = 0; k < 16; k++) {
    rowDivs[k] = document.createElement("div");
    rowDivs[k].classList.add("row")
    for(let j = 0; j < 16; j++) {
        blockDivs[i] = document.createElement("div");
        blockDivs[i].classList.add("cell");
        console.log(i);
        blockDivs[i].addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "red";
        })
        rowDivs[k].appendChild(blockDivs[i]);
        i++
    }
    containerDiv.appendChild(rowDivs[k]);
}
body.appendChild(containerDiv);

