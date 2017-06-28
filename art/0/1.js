rbvj = function(){

  var num = 80;
  var engine = new particleEngine(1, num);
  var sound_map = 20;

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
  }

  draw = function() {
    t_size = 100;
      ctx.background(0);
    	moveParticles();

    	ctx.save();
    	ctx.fillStyle = rgb(0);
    	//ctx.eqFillTriangle(w/2, h/2-200, t_size/2);
    	ctx.rect(left.x, left.y, box_size.x, box_size.y);
    	ctx.clip();
    	drawParticles();
    	ctx.restore();

    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length*2, 0, sound_map);
      //console.log(s);
      p.sz = tween(p.sz, s, 2);
      p.pos.y -= s/10;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) p.pos.y = h;
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      ctx.fillStyle = rgba(255);
      //if(chance(40))
      ctx.fillRect(p.pos.x - engine.grid.spacing.x/2, p.pos.y - p.sz, engine.grid.spacing.x, p.sz);
  }
  }


}();
