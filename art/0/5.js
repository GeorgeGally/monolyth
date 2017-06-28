rbvj = function(){

var num = 60;
var engine = new particleEngine(8, num);

ctx.background(0);
// console.log(engine.grid);

for (var i = 0; i < engine.particles.length; i++) {
  var p = engine.particles[i];
  p.pos.x = randomSticky(left.x, right.x, 5);
  if (p.pos.x >= w/2 ) {
    p.speed.x = random(-1,0)/10;
  } else {
    p.speed.x = random(0, 1)/10;
  }
}

var pixels = randomInt(4, 20);

draw = function() {

    ctx.background(0, 0.08);
  	ctx.save();
    if (chance(100)) pixels = randomInt(2, 50);
    //drawObelisk()
    ctx.rect(left.x, left.y, box_size.x, box_size.y);
  	ctx.clip();
    moveParticles();
  	drawParticles();
    ctx.pixelate(pixels);
  	ctx.restore();

  }



function moveParticles(){
  for (var i = 0; i < engine.length; i++) {
    var p = engine.particles[i];
    var s = Sound.mapSound(i, engine.length, 0, engine.grid.spacing.y-1)/3;
    p.sz = tween(p.sz, s, 4);
    p.pos.x += p.speed.x;
    p.pos.y -= p.sz;
    if (p.pos.y > h) p.pos.y = 0;
    if (p.pos.y < 0) p.pos.y = h;
  }
}


function drawParticles(){
  for (var i = 0; i < engine.length; i++) {
    var p = engine.particles[i];
    ctx.fillStyle = rgba(255);
    ctx.fillEllipse(p.pos.x, p.pos.y, p.sz, p.sz);
}
}



}();
