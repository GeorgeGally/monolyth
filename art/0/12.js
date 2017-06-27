rbvj = function(){

  var grid_w = 10;
  var grid_h = 45;
  var engine = new particleEngine(grid_w, grid_h, left.x, right.y, box_size.x, box_size.y);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.sz = 1;
    //p.pos.x = random(left.x, right.x);

  }


  draw = function() {
      ctx.background(0);
      moveParticles();
    	drawParticles();
    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length, 0, 5);
      //p.sz = tween(p.sz, s, 4);
      //p.pos.x += p.speed.x;
      p.pos.y -= s;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) {
        p.pos.y = h;
        p.sz = s/2;

      }
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      ctx.strokeStyle = rgba(255);
      ctx.lineWidth = 1;
      ctx.fillStyle = rgba(255);
      ctx.fillRect(100 + p.pos.x - engine.grid.spacing.x, p.pos.y, engine.grid.spacing.x, 5);
      //makeV(p.pos.x - 50, p.pos.y, p.pos.x, p.pos.y -30 - p.sz, p.pos.x + 50, p.pos.y)
      ctx.line(100 + p.pos.x, p.pos.y, 100 + p.pos.x, p.pos.y - p.sz*8 - 20);
  }
  }


}

rbvj();
