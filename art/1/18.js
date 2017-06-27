rbvj = function(){

  ctx.background(0);
  ctx.strokeStyle = rgba(0,0,0,0.8);
  var particles = [];
  var radius = 180;

draw = function(){
  //console.log(audioChannelVolume.length) //256
  var ratio = w/256;
  //ctx.clearRect(0, 0, w, h);
  ctx.background(0, 0, 0, 0.3);
  var angle = 360.0/256;
  for (var i = 0; i < 200; i+=2) {
    var x = width/2;
      var y = height/2+Math.sin(radians(Sound.mapSound(i, 200)*angle))*radius;
    if (Sound.mapSound(i, 360) > 1) addParticle(x, y, "#000");
  };
  moveParticles();
}

function addParticle(_x, _y, _colour){
  var particle = {
    x: _x,
    y: _y,
    c: _colour,
    speedx: random(-5,5),
    speedy: random(-1.5,0.5),
    sz: 12
  }

  particles.push(particle);
}

function moveParticles(){
  for (var i = 0; i < particles.length; i++) {
    p = particles[i];
    p.x += p.speedx;
    p.y += p.speedy;
    p.sz *= 0.95;
    ctx.fillStyle = p.c;
    ctx.fillEllipse(p.x, p.y, p.sz, p.sz);
    ctx.fillStyle = "#fff";
    if (p.sz > 0.2) ctx.fillEllipse(p.x, p.y, p.sz/5, p.sz/5);
    if (p.x < left.x || p.y < 0 || p.x > right.x|| p.y > h || p.sz < 0.2) particles.splice(i,1);
  };

}

}

rbvj();
