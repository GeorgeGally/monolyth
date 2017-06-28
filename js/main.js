var ctx = createCanvas('canvas1');
var ctx2 = createCanvas('canvas2');

var rbvj;

var pixelateOn = false;
var strobeOn = false;
var scanLinesOn = false;
var showStats = false;
var ui_on = false;
var blocksize = 20;
var left = {x: w/2 - 80, y: 0};
var right = {x: w/2 + 80, y: h};
var box_size = new Vector(160,h);
var timer_counter = 0;

var elem = document.getElementById("myBar");
var bar_width = 1;

// TIMER BAR
var timer = function() {
  var newfile = randomInt(98, 125);
  //newPage( files[newfile] );
  changeFile(newfile);
  move();
}

function move() {

    bar_width = 1;
    var id = setInterval(frame, 100);
    function frame() {
        if (bar_width >= 100 || chance(5000)) {
            clearInterval(id);
            timer();
        } else {
          bar_width += 0.2;
          elem.style.width = bar_width + '%';
        }
    }
}
timer();
changeFile(98);
