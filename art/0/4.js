rbvj = function(){
  var num = 20;
  var engine = new particleEngine(2, num);


  console.log(engine.grid);

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
    	// ctx.eqFillTriangle(w/2, h/2-205, t_size/2 - 10);
      //drawObelisk()
    	ctx.clip();
    	drawParticles();
    	ctx.restore();

    }


  function drawObelisk(){
    ctx.moveTo(w/2-t_size/2 + 11, h/2-225 + t_size/2);
    ctx.lineTo(w/2-t_size/2 + t_size -11, h/2-225 + t_size/2);
    ctx.lineTo(w/2-t_size/2 + t_size, h/2-225 + t_size/2 + h/2 + h/4);
    ctx.lineTo(w/2-t_size/2, h/2-225 + t_size/2 + h/2 + h/4);
    ctx.fill();
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
