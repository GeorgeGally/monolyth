rbvj = function(){
  var grid_w = 4;
  var grid_h = 30;
  var engine = new particleEngine(grid_w, grid_h, box_size.x, box_size.y, left.x, right.y);
  var pixels = random(5, 30);


  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.pos.y = random(h);
    // p.pos.x = w/2 + randomSticky(-20,20, 5);
    // if (p.pos.x >= w/2 ) {
    //   p.speed.x = random(-1,0)/10;
    // } else {
    //   p.speed.x = random(0, 1)/10;
    // }
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
      var s = Sound.mapSound(i, engine.length, 0, 20);
      //p.sz = tween(p.sz, s, 4);
      //p.pos.x += p.speed.x;
      p.pos.y -= 0.1 + s/20;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) {
        p.pos.y = h;
      }
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      ctx.fillStyle = rgba(255);
      ctx.fillRect(p.pos.x, p.pos.y, engine.grid.spacing.x, p.sz);
      //ctx.fillRect(left.x, left.y, box_size.x, p.sz);
  }
  }



}();
