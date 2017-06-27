
rbvj = function(){
  ctx.background(0);
  ctx2.background(0);
  var engine = new particleEngine(400);
  pixel_size = 3;

  draw = function() {
    ctx.background(0, 0.02);
    ctx2.fillStyle = rgba(0, 0.1);
    ctx2.clearRect(0, 0, w, h);
    pixelfall();
  }

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.pos.x =  randomInt(left.x, right.x);
    p.pos.y = randomInt(left.y, right.y);
    p.speed.y = -0.8;
    p.c = rgb(random(20, 255));
    if(chance(100)) {
      p.on = true;
    } else {
      p.on = false;
    }
  }

function pixelfall(){

  for (var i = 0; i < engine.particles.length; i++) {

    var p = engine.particles[i];
    p.pos.y = p.pos.y - Math.abs(p.speed.y);
    if (chance(10000)) p.speed.y = -10;
    if (p.pos.y < left.y) {
      p.pos.y = right.y;
      p.speed.y = random(0.6, 0.9);

    };
    if(p.on == true) {
      ctx.fillStyle = p.c;
      ctx.fillRect((p.pos.x/10)*10, p.pos.y, pixel_size, pixel_size);
    } else {
      ctx2.fillStyle = p.c;
      ctx2.fillRect((p.pos.x/10)*10, p.pos.y, pixel_size, pixel_size);
    }
  }

}



}

rbvj();
