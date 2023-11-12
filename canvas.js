let container = document.getElementById("container");
let size = 16;

function createGrid(size){
for(let i = 0; i < size; i++){
    let div = document.createElement("div");
    div.classList.add("row");
    for(let j = 0; j < size; j++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener("mouseover", (event) => {
            event.target.style.background = getRandomColor();
        });
        div.appendChild(pixel);
    }
    container.appendChild(div);
}
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function promptNumber(string = "Enter a number under 100: "){

    size = prompt(string, 16);
if(size >0 && size < 101){
    while(container.firstChild){
        container.removeChild(container.lastChild);
    }
    createGrid(size);
}else{promptNumber("A number under 100!");}

}

createGrid(size);