const container = document.querySelector("#container");
const clearButton = document.querySelector("#clear");
const destroyButton = document.querySelector("#destroy");

let defaultNum = 16;
let gridSize;
let divWidth;
let newNum;
let startColor = 0;

window.onload = drawGrid(defaultNum);

destroyButton.addEventListener("click", newGrid);

function newGrid(){
    newNum = prompt("Enter new grid size");
    if(newNum === null){
        alert("Please enter an argument")
    } else{
        newNum = Number(newNum);
        if(Number.isInteger(newNum)){
            clearGrid();
            drawGrid(newNum);
        } else{
            alert("ERROR. ENTER A WHOLE NUMBER");
        }
    }
    
}

function drawGrid(gridNum){

    gridSize = gridNum * gridNum;
    divWidth = (640 / gridNum) - 2;

    for(let i = 0; i < gridSize; i++){
        let divs = document.createElement("div");
        divs.classList.add("sketch");
        divs.style.setProperty("width", divWidth  + "px");
        divs.style.setProperty("height", divWidth  + "px");
        container.appendChild(divs);
    }

    colorCells();
}

function colorCells(){
    document.querySelectorAll(".sketch").forEach(divs => {
        divs.addEventListener("mouseover", shadeCell);
        clearButton.addEventListener("click", function(e){
            divs.style.backgroundColor = "white";
        })
    })
}

function shadeCell(event){
    cellColor = event.target.style.backgroundColor;
    if(cellColor == "" || cellColor == "white"){
        event.target.style.backgroundColor = randomColor();
    } else{
        event.target.style.backgroundColor = darkenRGB(cellColor);
    }
}

function randomColor(){
    let r, g, b;
    do{
        r = Math.round(Math.random() * 255);
        g = Math.round(Math.random() * 255);
        b = Math.round(Math.random() * 255);
    } while(r == 255 && b == 255 && g == 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function darkenRGB(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb
      .substr(4)
      .split(")")[0]
      .split(sep);
    let r = Math.round(rgb[0] * 0.75);
    let g = Math.round(rgb[1] * 0.75);
    let b = Math.round(rgb[2] * 0.75);
    return `rgb(${r}, ${g}, ${b})`;
  }

function clearGrid(){
    for(let i = gridSize; i > 0; i--){
        container.removeChild(container.childNodes[i]);
    }
}


