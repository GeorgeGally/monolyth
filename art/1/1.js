rbvj = function(){

  var num = 200;
  var engine = new particleEngine(1, num);


  console.log(engine.grid);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.pos.x = random(left.x, right.x);
  }

  draw = function() {
    t_size = 100;
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
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length, 0, 30)/10;
      if(s>0) p.sz = tween(p.sz, s, 4);
      //p.pos.y -= 1;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) p.pos.y = h;
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      ctx.fillStyle = rgba(255);
      if(chance(40)) ctx.fillEllipse(p.pos.x, p.pos.y, p.sz, p.sz);
  }
  }


}();
