let body = document.querySelector("body");


let button = document.createElement("button");
button.classList.add("size-button");
button.textContent = "Change Size";
button.addEventListener("click", ()=> {
    let size = parseInt(prompt("Please enter the length of the side you would like: (max: 100)"));
    size = size < 100 ? size : 100;
    let containerDiv = document.querySelector(".board");
    containerDiv.remove();
    createGrid(size);

})
body.appendChild(button)
createGrid(16);





function createGrid(size){
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("board");
    let blockDivs = [];
    let rowDivs = [];
    let i = 0;
    for (let k = 0; k < size; k++) {
        rowDivs[k] = document.createElement("div");
        rowDivs[k].classList.add("row");
        for(let j = 0; j < size; j++) {
            blockDivs[i] = document.createElement("div");
            blockDivs[i].classList.add("cell");
            console.log(i);
            blockDivs[i].addEventListener("mouseover", (e) => {
                e.target.style.backgroundColor = "#7360DF";
            })
            rowDivs[k].appendChild(blockDivs[i]);
            i++;
        }
        containerDiv.appendChild(rowDivs[k]);
    }
    body.appendChild(containerDiv);
}




