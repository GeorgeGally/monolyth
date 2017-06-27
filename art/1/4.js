rbvj = function(){

  var engine = new particleEngine(10, 40, box_size.x, box_size.y, left.x, left.y);


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
      ctx.rect(left.x, left.y, box_size.x, box_size.y);
      //drawObelisk()
    	//ctx.clip();
    	drawParticles();
    	ctx.restore();
      // ctx.fillStyle = rgb(0);
      // if(chance(550)) ctx.rect(left.x, left.y, box_size.x, box_size.y);
      // ctx.fillStyle = rgb(255);
      // if(chance(50)) ctx.rect(left.x, left.y, box_size.x, box_size.y);
    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i + p.col, engine.length*2, 0, engine.grid.spacing.x/2);
      p.sz = tween(p.sz, s, 2);
      p.pos.y -= 1;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) p.pos.y = h;
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];

      ctx.fillStyle = rgba(255);
      ctx.fillEllipse(p.pos.x, p.pos.y, engine.grid.spacing.x - p.sz, engine.grid.spacing.x - p.sz);
      ctx.fillStyle = rgba(0);
      ctx.fillEllipse(p.pos.x, p.pos.y, engine.grid.spacing.x-10, engine.grid.spacing.x-10);
  }
  }


}();
