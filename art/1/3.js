rbvj = function(){

  var num = 60;
  var engine = new particleEngine(2, num, box_size.x, box_size.y, left.x, left.y);
  ctx.font = '9px Monospace';
  //ctx.textAlign = "center";

  //console.log(engine.grid);

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.txt = "";
    if(chance(20)) p.on = false;
  }

  draw = function() {

    t_size = 50;
      ctx.background(0);
    	moveParticles();

    	ctx.save();
    	ctx.fillStyle = rgb(0);

    	ctx.fillStyle = rgb(0);
    	//ctx.eqFillTriangle(w/2, h/2-210, t_size/2 -4);
    	ctx.rect(left.x, left.y, box_size.x, box_size.y);
    	ctx.clip();
    	drawParticles();
    	ctx.restore();

    }



  function moveParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      var s = Sound.mapSound(i, engine.length, 0, 200);
      if (p.txt.length > 200) p.txt = "";
      p.txt = s.toFixed(randomInt(12));

      p.sz = tween(p.sz, s, 2);
      //p.pos.y -= s/10;
      p.pos.y -= 2;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) p.pos.y = h;
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      for (var j = i; j < engine.length; j++) {
        var p2 = engine.particles[j];
        if (hittestBall(p, p2)) {
          ctx.fillStyle = rgba(255, 0, 0);
          ctx.fillRect(p.pos.x - engine.grid.spacing.x/2, p.pos.y - 6, p.text.length*10, 11)
        }
      }


      if(!p.on){
        ctx.fillStyle = rgba(255);
        var t = p.sz + p.txt.length*2;
        if(chance(2)) ctx.centreFillRect(p.pos.x - t/2, p.pos.y - 2, t, 11)
        ctx.fillStyle = rgba(0);
        ctx.fillText(p.txt, p.pos.x - engine.grid.spacing.x/2, p.pos.y);
      } else {
        ctx.fillStyle = rgba(255);
        ctx.fillText(p.txt, p.pos.x - engine.grid.spacing.x/2, p.pos.y);
      }


      //ctx.fillRect(p.pos.x - engine.grid.spacing.x/2, p.pos.y, engine.grid.spacing.x, p.sz);
  }
  }

}();
