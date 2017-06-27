rbvj = function(){

  console.log("======== acceptance ");

  ctx.background(0);
  var lines = new particleEngine(200);

for (var i = 0; i < lines.particles.length; i++) {
  var p = lines.particles[i];
  p.pos.x =  w/2-w/8;
  p.start.x =  random(w/2-w/8);
  p.sz = random(4);
  p.pos.y = random(left.y, right.y);
  p.dir = posNeg();
  p.speed.y = -1*random(1,5);
  p.c = rgb(205,0,0);
  p.h = random(4);
}

draw = function() {
  drawLines();
}


function drawLines(){

  //motionDetection();
  ctx.fillStyle = "black";
  ctx.fillRect(left.x, left.y, right.x, right.y);
  ctx.fillStyle = "white";

  for (var i = 0; i < lines.particles.length; i++) {

    var p = lines.particles[i];
    p.pos.x = left.x;
    var s = Sound.mapSound(i, lines.particles.length*2, 0, 5);
    p.pos.y += (p.speed.y - s)/2;
    if (p.pos.y > right.y) {p.pos.y = left.y};
    if (p.pos.y < 0) p.pos.y = right.y;

    ctx.fillRect(p.pos.x, p.pos.y, box_size.x, p.sz);



  }
}



}

rbvj();
