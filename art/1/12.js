rbvj = function(){

  var grid_w = 10;
  var grid_h = 45;
  var engine = new particleEngine(grid_w, grid_h, left.x, right.y, w/2-50, 0);


  console.log(engine.grid);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.sz = 1;
    p.pos.x = random(left.x, right.x);

  }

  var pixels = randomInt(4, 20);

  draw = function() {
      t_size = 50;
      ctx.background(0);
    	ctx.save();
      if (chance(100)) pixels = randomInt(2, 50);
      //drawObelisk()
    	//ctx.clip();
      moveParticles();
    	drawParticles();
      //ctx.pixelate(pixels);
    	ctx.restore();

    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length, 0, 5);
      //p.sz = tween(p.sz, s, 4);
      //p.pos.x += p.speed.x;
      p.pos.y -= s;
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
      ctx.strokeStyle = rgba(255);
      ctx.lineWidth = 1;
      //ctx.fillRect(0, p.pos.y, w, p.sz);
      //makeV(p.pos.x - 50, p.pos.y, p.pos.x, p.pos.y -30 - p.sz, p.pos.x + 50, p.pos.y)
      ctx.line(p.pos.x, p.pos.y, p.pos.x, p.pos.y - p.sz*8 - 20);
  }
  }



  function drawObelisk(){
    ctx.fillStyle = rgb(0);
    //ctx.eqStrokeTriangle(w/2, h/2-207, t_size/2 - 11);
    ctx.moveTo(w/2-t_size/2 + 11, h/2-225 + t_size/2);
    ctx.lineTo(w/2-t_size/2 + t_size -11, h/2-225 + t_size/2);
    ctx.lineTo(w/2-t_size/2 + t_size, h/2-225 + t_size/2 + h/2 + h/4);
    ctx.lineTo(w/2-t_size/2, h/2-225 + t_size/2 + h/2 + h/4);
    ctx.closePath();
    ctx.stroke();
  }


  function makeV(x1, y1, x2, y2, x3, y3) {
    'use strict';
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    //ctx.lineTo(x1, y1);
    ctx.stroke();
    //this.closePath();
   };

}

rbvj();
