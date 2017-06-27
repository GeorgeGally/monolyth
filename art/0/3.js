rbvj = function(){

  var num = 10;
  var engine = new particleEngine(2, num);
  ctx.font = '10px Courier';
  //ctx.textAlign = "center";

  console.log(engine.grid);

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
      var s = Sound.mapSound(i, engine.length, 0, 20);
      if (p.txt.length > 200) p.txt = "";
      p.txt += s;

      p.sz = tween(p.sz, s, 2);
      p.pos.y -= s/10;
      if (p.pos.y > h) p.pos.y = 0;
      if (p.pos.y < 0) p.pos.y = h;
    }
  }


  function drawParticles(){
    for (var i = 0; i < engine.length; i++) {
      var p = engine.particles[i];
      if(!p.on){
        ctx.fillStyle = rgba(255);
        ctx.fillRect(p.pos.x - engine.grid.spacing.x/2, p.pos.y - 10, 100, 11)
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
