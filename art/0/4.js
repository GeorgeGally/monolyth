rbvj = function(){
  var num = 20;
  var engine;
  var sound_map = 4;
  reset();


  function reset(){
    engine = new particleEngine(randomInt(2,60), num, box_size.x, box_size.y, left.x, right.y);
    for (var i = 0; i < engine.particles.length; i++) {
      var p = engine.particles[i];
      p.pos.y = randomSticky(h, 40);
    }

  }

  draw = function() {

      ctx.background(0);
    	moveParticles();

    	ctx.save();
    	ctx.fillStyle = rgb(0);
      ctx.rect(left.x, left.y, box_size.x, box_size.y);
    	ctx.clip();
    	drawParticles();
    	ctx.restore();

    }



  function moveParticles(){

    if(Sound.getVol()>95) reset();
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length, 0, sound_map);
      p.sz = tween(p.sz, s, 2);
      p.pos.y -= s/2;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) p.pos.y = h;
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      ctx.fillStyle = rgba(255);
      ctx.centreFillRect(p.pos.x, p.pos.y - p.sz, engine.grid.spacing.x, p.sz);
    }
  }


}();
