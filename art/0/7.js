rbvj = function(){

  var engine;
  var sound_map = 50;
  reset();

  function reset() {
    var grid_w = randomInt(4, 40);
    var grid_h = randomInt(10, 60);
    engine = new particleEngine(grid_w, grid_h, box_size.x, box_size.y, left.x, right.y);
    for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.pos.y = randomSticky(h, 50);
    }
  }

  var pixels = randomInt(4, 20);

    draw = function() {
      ctx.background(0);
    	//ctx.save();
      if (chance(100)) pixels = randomInt(2, 50);

      moveParticles();
    	drawParticles();
      //ctx.pixelate(pixels);
    	//ctx.restore();

    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length, 0, sound_map);
      p.sz = tween(p.sz, s, 4);
      //p.pos.x += p.speed.x;
      p.pos.y -= 0.1 + s/20;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) {
        p.pos.y = h;
      }
    }
  }


  function drawParticles(){
    if(Sound.getVol()>95) reset();
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      ctx.fillStyle = rgba(40 + p.sz*3);
      ctx.fillRect(p.pos.x, p.pos.y - p.sz/2, engine.grid.spacing.x-2, p.sz);
      //ctx.fillRect(left.x, left.y, box_size.x, p.sz);
  }
  }



}();
