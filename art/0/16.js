rbvj = function(){
ctx.background(0);
ctx2.clearRect(0,0,w,h);


var grid_w = 80;
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
    b.speed = engine.particles[b.me-grid_w].speed;
  } else{
    if (i%4 == 0 && i > 4) {
      b.speed = engine.particles[b.me-4].speed;
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
    var s = Sound.mapSound(engine.particles.length-i, engine.particles.length, 0, 235);
    ctx.fillStyle = rgb(s);
    //if(mode == 1) {
    //ctx.fillRect(b.pos.x, b.pos.y, b.h-5, b.h-5);
    //} else {
      ctx.LfillEllipse(b.pos.x, b.pos.y, b.sz, b.sz);
    //}

  }
}
}();
