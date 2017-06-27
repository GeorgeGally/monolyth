rbvj = function(){


  var particles = [];
  var radius = 180;
  var max_particles = 2800;
  draw = function(){
  var ratio = w/Sound.spectrum.length;

  	ctx.background(255);

  	for (var i = 0; i < 20; i++) {
  		var x = w/2;
      // var y = h + Sound.mapSound(i, Sound.spectrum.length, 0, 60);
      //var y = random(h - 50, h - 80);
      var y = h/2 + Math.sin(frameCount/50) * h/2
  		if (Sound.spectrum[i] > 1) addParticle(x, y, "#000");
  	};
  	moveParticles();
  }

  function addParticle(_x, _y, _colour){
  	var particle = {
  		x: _x,
  		y: _y,
  		c: _colour,
  		speedx: random(-1, 1),
  		speedy: random(-15,-2),
  		sz: 10
  	}

  	particles.push(particle);
    if(particles.length> max_particles) particles.splice(0,1);
  }

  function moveParticles(){
  	for (var i = particles.length-1; i >= 0 ; i--) {
  		p = particles[i];
  		p.x += p.speedx;
  		p.y+= p.speedy;
  		p.sz *= 0.99;
  		ctx.fillStyle = p.c;
  		ctx.fillEllipse(p.x, p.y, p.sz, p.sz);
  		ctx.fillStyle = "#fff";
  		if (p.sz > 0.1) ctx.fillEllipse(p.x, p.y, p.sz/5, p.sz/5);
  		if (p.x < left.x || p.y < 0 || p.x > right.x || p.sz < 0.1) particles.splice(i,1);
  	};

  }



}();
