var slider = document.getElementById("myRange");
var output = document.getElementById("val");
output.textContent = slider.value + " x " + slider.value;
const buttons = document.getElementsByTagName("button");
for(let i=0;i<buttons.length;++i){
    buttons[i].addEventListener("click",setColor);
}

let mouseDown = false;
document.body.onmousedown = () => mouseDown = true;
document.body.onmouseup = () => mouseDown = false;

createElements();
slider.addEventListener("input",createElements);
function createElements(){
    let val = 4;
    if (!isNaN(this.value)){
        output.textContent = this.value + " x " + this.value;
        val = this.value;
        
    }
    const canvas = document.getElementById("canvas");
    canvas.innerHTML = "";
    for(let i=0; i<val; i++){
        const elem = document.createElement("div");
        elem.classList.add("square","parent");
        for(let j=0;j<val;j++){
            const elem2 = document.createElement("div");
            elem2.classList.add("square","child");
            elem2.style.backgroundColor = "white";
            elem.appendChild(elem2);
        }
        canvas.appendChild(elem);
    }
    const squares = document.getElementsByClassName("square child");
    for(let i=0;i<squares.length;++i){
        squares[i].addEventListener("mouseover",paintCanvas);
        squares[i].addEventListener("click",paintCanvas);
    }
};

var current_color = "std";
document.getElementById("standard").classList.add("selected");
function setColor(){
    if (this.id == "standard"){
        globalThis.current_color = "std";
        this.nextElementSibling.classList.remove("selected");
        this.nextElementSibling.nextElementSibling.classList.remove("selected");
    }
    else if (this.id == "rgb"){
        globalThis.current_color = "rgb";
        this.nextElementSibling.classList.remove("selected");
        this.previousElementSibling.classList.remove("selected");
    }
    else{
        globalThis.current_color = "erase";
        this.previousElementSibling.classList.remove("selected");
        this.previousElementSibling.previousElementSibling.classList.remove("selected");
    }
    this.classList.add("selected");
}

function paintCanvas(e){
    if (!mouseDown && e.type=="mouseover") return;
    if(globalThis.current_color == "std") this.style.backgroundColor = "black";
    else if (globalThis.current_color == "rgb"){
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    } else this.style.backgroundColor = "white";
}

document.getElementsByTagName("svg")[0].addEventListener("click",()=>window.location.href="https://github.com/johnwee1");