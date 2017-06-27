rbvj = function(){

  var grid_w = 2;
  var grid_h = 10;
  var engine = new particleEngine(grid_w, grid_h);

  //console.log(engine.grid);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.pos.x = randomSticky(left.x, right.x, 5);
    if (p.pos.x >= w/2 ) {
      p.speed.y = random(-1,0)/10;
    } else {
      p.speed.y = random(0, 1)/10;
    }
  }

  var pixels = randomInt(4, 20);

  draw = function() {

      t_size = 50;
      ctx.background(0);
    	ctx.save();
      if (chance(100)) pixels = randomInt(2, 50);
      ctx.rect(left.x, left.y, box_size.x, box_size.y);
      //drawObelisk()
    	ctx.clip();
      moveParticles();
    	drawParticles();
      //ctx.pixelate(pixels);
    	ctx.restore();

    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length, 0, 20)/4;
      if(s>0) p.sz = tween(p.sz, s, 4);
      //p.pos.x += p.speed.x;
      p.pos.y -= s;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) p.pos.y = h;
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      ctx.fillStyle = rgba(255);
      ctx.fillRect(p.pos.x, p.pos.y, engine.grid.width, p.sz);
  }
  }



  function drawObelisk(){
    ctx.fillStyle = rgb(0);
    ctx.eqStrokeTriangle(w/2, h/2-210, t_size/2 - 10);
    ctx.moveTo(w/2-t_size/2 + 11, h/2-225 + t_size/2);
    ctx.lineTo(w/2-t_size/2 + t_size -11, h/2-225 + t_size/2);
    ctx.lineTo(w/2-t_size/2 + t_size, h/2-225 + t_size/2 + h/2 + h/4);
    ctx.lineTo(w/2-t_size/2, h/2-225 + t_size/2 + h/2 + h/4);
    ctx.stroke();
  }



}();
