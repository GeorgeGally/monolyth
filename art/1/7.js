rbvj = function(){
  var grid_w = 1;
  var grid_h =  60;
  var engine = new particleEngine(grid_w, grid_h);


  //console.log(engine.grid);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    if(chance(100)) p.on = false;
  }

  var pixels = randomInt(4, 20);

    draw = function() {
      t_size = 50;
      ctx.background(0);
    	ctx.save();
      if (chance(100)) pixels = randomInt(2, 50);
      //drawObelisk()
      //ctx.fillSttle= "white";

    	//ctx.clip();
      moveParticles();
    	drawParticles();
      //ctx.pixelate(pixels);

      // if(chance(10)) ctx.background(0, 0.5);
      // if(chance(10)) ctx.background(255, 0.5);
    	ctx.restore();

    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length, 0, 20)/3;
      //p.sz = tween(p.sz, s, 4);
      //p.pos.x += p.speed.x;
      p.pos.y -= s/10;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) {
        p.pos.y = h;
        p.sz = s/5;
        // ctx.fillStyle = "red";
        // ctx.fillEllipse(w/2, h - 120, 5, 5);
      }
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      if(p.on) {
        ctx.strokeStyle = rgba(255);
        //ctx.fillRect(left.x, p.pos.y, box_size.x, p.sz);
        ctx.line(left.x, p.pos.y, right.x, box_size.y);
      } else {
        ctx.fillStyle = rgba(0);
        ctx.fillRect(left.x, p.pos.y, box_size.x, 250);
      }

      //ctx.fillRect(left.x, left.y, box_size.x, p.sz);
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
