var slider = document.getElementById("myRange");
var output = document.getElementById("val");
output.textContent = slider.value + " x " + slider.value;
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
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            elem2.style.backgroundColor = "#" + randomColor;
            elem.appendChild(elem2);
        }
        canvas.appendChild(elem);
    }
};