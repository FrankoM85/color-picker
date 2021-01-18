function _load() {

    function rgb(r,g,b) {
        return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
    }

    let a = document.getElementById("red").value,
        b = document.getElementById("green").value,
        c = document.getElementById("blue").value;
      
    document.body.style.backgroundColor = rgb(a,b,c);

    function rgbToHex(r, g, b) {
        return "HEX value: #" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
      
    document.getElementById("hex").textContent = rgbToHex(Number(a),Number(b),Number(c));
    
    function rgbToBin(n){
        return Number(n).toString(2);
    }

    document.getElementById("red-bin").textContent = "Red: " + rgbToBin(a);
    document.getElementById("green-bin").textContent = "Green: " + rgbToBin(b);
    document.getElementById("blue-bin").textContent = "Blue: " + rgbToBin(c);

    /*let redBin = Number(a).toString(2),
        greenBin = Number(b).toString(2),
        blueBin = Number(c).toString(2);

    document.querySelector("li[1]").textContent = "Green: " + greenBin;
    document.querySelector("li[2]").textContent = "Blue: " + blueBin;*/

}

window.addEventListener("load", _load);
window.addEventListener("click", _load);


/*  256 128 64 32 16 8 4 2 1
    011111111  
    */