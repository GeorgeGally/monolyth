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

changeFile(98);
