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
            event.target.style.background = 'black';
        });
        div.appendChild(pixel);
    }
    container.appendChild(div);
}
}

function promptNumber(string){

    size = prompt(string, 16);
if(size >0 && size < 101){
    createGrid(size);
}else{promptNumber("A number under 100!");}

}

promptNumber("Enter a number under 100: ");


