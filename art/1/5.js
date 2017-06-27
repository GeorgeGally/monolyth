rbvj = function(){

  var engine = new particleEngine(15, 50, box_size.x, box_size.y, left.x, left.y);


  console.log(engine.grid);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    if(chance(5)) p.on = false;
  }

  draw = function() {

      t_size = 50;
      ctx.background(0);
    	moveParticles();

    	ctx.save();
    	ctx.fillStyle = rgb(0);
      ctx.rect(left.x, left.y, box_size.x, box_size.y);
      //drawObelisk()
    	ctx.clip();
    	drawParticles();
      if(chance(10)) ctx.background(0, 0.5);
      if(chance(10)) ctx.background(255, 0.5);
      ctx.restore();

    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length, 1, 8)/3;
      p.sz = tween(p.sz, s, 20);
      p.pos.y -= p.sz/5;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) p.pos.y = h;
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      ctx.fillStyle = rgb(140 + p.sz* 10);
      if(p.on) ctx.LfillEllipse(p.pos.x, p.pos.y, p.sz, p.sz);
  }
  }


}();
