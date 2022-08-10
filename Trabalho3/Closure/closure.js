function altCor(color) {
    return function () {
        document.getElementById("p").style.color = color;
    };
}

var red = altCor('red');
var blue = altCor('blue');
var green = altCor('green');



