rbvj = function(){

  var grid_w = randomInt(3, 8);
  var grid_h = 40;
  var engine = new particleEngine(grid_w, grid_h, box_size.x, box_size.y, left.x, right.y);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.pos.y = randomSticky(h, 40);
  }

  var pixels = randomInt(4, 20);
  ctx.background(0);

  draw = function() {

      ctx.fillStyle = rgba(255, 0.1);
      ctx.fillRect(left.x, left.y, box_size.x, box_size.y);

      if (chance(100)) pixels = randomInt(2, 50);

      moveParticles();
    	drawParticles();

    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length, 0, 20)/4;
      if(s>0) p.sz = tween(p.sz, s, 4);
      //p.pos.x += p.speed.x;
      p.pos.y -= s;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) p.pos.y = h;
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];

      ctx.fillStyle = rgba(0);
      ctx.fillRect(p.pos.x - engine.grid.spacing.x/2, p.pos.y, engine.grid.spacing.x, engine.grid.spacing.x);
      //ctx.fillRect(0, p.pos.y, w, p.sz);
  }
  }




}();
