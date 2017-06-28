rbvj = function(){
  var grid_w = 1;
  var grid_h = 45;
  var engine = new particleEngine(grid_w, grid_h);
  var sound_map = 40;

  console.log(engine.grid);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.sz = 1;
    p.pos.x = w/2 + randomSticky(-20,20, 5);
    p.pos.y = randomSticky(h, 50);
    if (p.pos.x >= w/2 ) {
      p.speed.x = random(-1,0)/10;
    } else {
      p.speed.x = random(0, 1)/10;
    }
  }

  var pixels = randomInt(4, 20);

    draw = function() {
      t_size = 50;
      ctx.background(0);
    	ctx.save();
      ctx.fillStyle = rgb(255);
      ctx.rect(left.x, left.y, box_size.x, box_size.y);
      ctx.clip();
      moveParticles();
    	drawParticles();
      //ctx.pixelate(pixels);
    	ctx.restore();

    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length*2, 0, sound_map);
      p.sz = tween(p.sz, s, 4);
      //p.pos.x += p.speed.x;
      p.pos.y -= s/5;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) {
        p.pos.y = h;
        p.sz = s/2;

      }
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      ctx.strokeStyle = rgba(30 + p.sz*4);
      ctx.lineWidth = p.sz;
      //ctx.fillRect(left.x, left.y, box_size.x, p.sz);
      //ctx.fillRect(left.x, p.pos.y, box_size.x, p.sz);
      ctx.line(left.x - 120, p.pos.y, right.x+100, p.pos.y + 200);
  }
  }



  function drawObelisk(){
    ctx.fillStyle = rgb(0);
    ctx.eqStrokeTriangle(w/2, h/2-207, t_size/2 - 11);
    ctx.moveTo(w/2-t_size/2 + 11, h/2-225 + t_size/2);
    ctx.lineTo(w/2-t_size/2 + t_size -11, h/2-225 + t_size/2);
    ctx.lineTo(w/2-t_size/2 + t_size, h/2-225 + t_size/2 + h/2 + h/4);
    ctx.lineTo(w/2-t_size/2, h/2-225 + t_size/2 + h/2 + h/4);
    ctx.stroke();
  }

}();
