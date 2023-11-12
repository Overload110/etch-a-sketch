let container = document.getElementById("container");
let size = 16;

function createGrid(size){
for(let i = 0; i < size; i++){
    let div = document.createElement("div");
    div.classList.add("row");
    for(let j = 0; j < size; j++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");
        div.appendChild(pixel);
    }
    container.appendChild(div);
}
}

function promptNumber(string){

    size = prompt(string, 16);
if(size >0 && size < 9999){
    createGrid(size);
}else{promptNumber("I said a number!");}

}

promptNumber("Enter a number: ");


