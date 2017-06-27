rbvj = function(){

var particles = new particleEngine(2000);
ctx.lineWidth = 0.1;
ctx.background(0);

for (var i = 0; i < particles.particles.length; i++) {
  p = particles.particles[i];
  p.pos = new Vector(random(-w, w), 0);
  p.old = new Vector(p.pos.x, p.pos.y);
  p.vel = new Vector(0, 0);
  p.acc = new Vector(0, 0);
  p.speed = -1 * random(5,12)/10001;
  var c = random(220,255);
  p.c = rgba(c, 0.9);
  p.noisy = random(6,8)/10001;
}

draw = function() {
  ctx.background(0, 0.08);
  ctx.save();
  ctx.fillStyle = rgba(0, 0.2);
  ctx.rect(left.x, left.y, box_size.x, box_size.y);
  ctx.clip();
  for (var i = 0; i < particles.particles.length; i++) {

  p = particles.particles[i];

  ctx.strokeStyle = p.c;
  p.old.x = p.pos.x;
  p.old.y = p.pos.y;


  //ctx.fillEllipse(p.pos.x, p.pos.y, 4, 4)
  p.vel.x = 10*PerlinNoise.noise(20+p.pos.x*.001, 20+p.pos.y*p.speed, p.noisy*29)*Math.cos(0.5 * Math.PI * PerlinNoise.noise(p.pos.x*.007, p.pos.y*.007, p.noisy*.5));
    p.vel.y = -20*PerlinNoise.noise(20+p.pos.x*.0007, 20+p.pos.y*.0007, p.noisy*29)*Math.sin(0.9 * Math.PI * PerlinNoise.noise(p.pos.x*.007, p.pos.y*.007, p.noisy*5));

    p.pos.x += p.vel.x;
    p.pos.y += p.vel.y;
    ctx.line(p.pos.x, p.pos.y, p.old.x, p.old.y);

  if (p.pos.y>h) { p.pos.y = p.old.y = 0; p.speed *(1+random(1)/1000000); }
  if (p.pos.x>w) { p.pos.x = 0; p.old.x = 0; p.speed *(1+random(1)/1000000); }
  if (p.pos.y<0) { p.pos.y = h; p.speed *(1+random(1)/1000000); }
  if (p.pos.x< -w) { p.pos.x = w; p.speed *(1+random(1)/1000000); }

    p.acc.x = 0;
    p.acc.y = 0;
    p.noisy += p.speed;
  }

  ctx.restore();

}






}();
