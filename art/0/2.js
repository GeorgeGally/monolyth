rbvj = function(){
  var num = 80;
  var engine = new particleEngine(1, num);

  //console.log(engine.grid);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
  }

  draw = function() {
    t_size = 50;
      ctx.background(0);
    	moveParticles();

    	ctx.save();
    	ctx.fillStyle = rgb(0);

    	ctx.fillStyle = rgb(0);
    	//ctx.eqFillTriangle(w/2, h/2-210, t_size/2 -4);
    	ctx.rect(left.x, left.y, box_size.x, box_size.y);
    	ctx.clip();
    	drawParticles();
    	ctx.restore();

    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length, 0, engine.grid.spacing.y-1);
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
      ctx.fillRect(p.pos.x - engine.grid.spacing.x/2, p.pos.y, engine.grid.spacing.x, p.sz);
  }
  }



}();
