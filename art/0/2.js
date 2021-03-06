rbvj = function(){
  var num = 80;
  var engine = new particleEngine(1, num);
  var sound_map = 30;
  //console.log(engine.grid);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
  }

  draw = function() {

      ctx.background(0);
    	moveParticles();

    	ctx.save();

    	ctx.rect(left.x, left.y, box_size.x, box_size.y);
    	ctx.clip();
    	drawParticles();
    	ctx.restore();

    }



  function moveParticles(){
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
    ctx.fillStyle = rgb(255);
    ctx.fillRect(left.x, left.y, box_size.x, box_size.y);
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      ctx.fillStyle = rgba(0);
      ctx.fillRect(p.pos.x - engine.grid.spacing.x/2, p.pos.y - p.sz/2, engine.grid.spacing.x, p.sz);
  }
  }



}();
