rbvj = function(){

var grid_w = 60;
var grid_h = 50;
var grid = createGrid(grid_w, grid_h);
var mode = randomInt(2)
var engine = new particleEngine(grid_w, grid_h);
var speed = random(1+i/2);
for (var i = 0; i < engine.particles.length; i++) {
  var b = engine.particles[i];
  //b.pos = new Vector(grid[i].x, grid[i].y);
  b.c =  (chance(2)) ? rgb(255): rgb(0);
  b.w = w/grid_w;
  b.h = h/grid_h;
  if (b.me > grid_w) {
    b.speed.y = engine.particles[b.me-grid_w].speed.y;
  } else{
    if (i%4 == 0 && i > 4) {
      b.speed.y = engine.particles[b.me-4].speed.y;
    } else {
      speed = random(1+i/100);
      b.speed = new Vector(0,speed);
    }

  }

}

draw = function() {
  ctx.background(0);
  //engine.draw();
  for (var i = 0; i < engine.particles.length; i++) {
    var b = engine.particles[i];
    b.pos.y -= b.speed.y;
    if(b.pos.y < -50) {
      b.pos.y = h + 50;
    }
    var s = Sound.mapSound(i, engine.particles.length, 0, 235);
    ctx.fillStyle = rgb(s);
    //if(mode == 1) {
    //ctx.fillRect(b.pos.x, b.pos.y, b.h-5, b.h-5);
    //} else {
    ctx.fillRect(b.pos.x, b.pos.y, b.h-1, b.h-1);
    //}

  }
}
}();
