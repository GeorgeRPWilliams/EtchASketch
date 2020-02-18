const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear");

let gridNum = 16;
let gridSize = gridNum * gridNum;
let divWidth = (640 / gridNum) - 2;

for(let i = 0; i < gridSize; i++){
    const divs = document.createElement("div");
    divs.classList.add("sketch");
    divs.style.setProperty("width", divWidth  + "px");
    divs.style.setProperty("height", divWidth  + "px");
    divs.addEventListener("mouseover", function(e){
        divs.style.backgroundColor = "black";
    })
    clearButton.addEventListener("click", function(e){
        divs.style.backgroundColor = "white";
    })
    container.appendChild(divs);
}

