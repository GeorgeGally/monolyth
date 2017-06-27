
rbvj = function(){

  ctx.background(0);

  var engine = new particleEngine(400);
  pixel_size = 3;

  draw = function() {
    pixelfall();
  }

  for (var i = 0; i < engine.particles.length; i++) {
    var p = engine.particles[i];
    p.pos.x =  randomInt(left.x, right.x);
    p.pos.y = randomInt(left.y, right.y);
    p.speed.y = -0.8;
    p.c = rgb(random(20, 255));
  }

function pixelfall(){

  ctx.fillStyle = rgb(0);
  ctx.fillRect(0, 0, w, h);

  //ctx.fillStyle = "white";

  for (var i = 0; i < engine.particles.length; i++) {

    var p = engine.particles[i];
    ctx.fillStyle = p.c;
    p.pos.y = p.pos.y - Math.abs(p.speed.y);
    if (chance(1000)) p.speed.y = -10;
    if (p.pos.y < left.y) {
      p.pos.y = right.y;
      p.speed.y = random(0.6, 0.9);

    };
    ctx.fillRect((p.pos.x/10)*10, p.pos.y, pixel_size, pixel_size);

  }

}



}

rbvj();
