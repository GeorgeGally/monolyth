rbvj = function(){


  var particles = [];
  var radius = 180;
  var max_particles = 3800;
  draw = function(){
  var ratio = w/Sound.spectrum.length;

  	ctx.background(255);

  	for (var i = 0; i < 20; i++) {
  		var x = random(left.x, right.x);
      // var y = h + Sound.mapSound(i, Sound.spectrum.length, 0, 60);
      var y = random(h, h + 50);
  		if (Sound.spectrum[i] > 1) addParticle(x, y, "#000");
  	};
  	moveParticles();
    mirror();
  }

  function addParticle(_x, _y, _colour){
  	var particle = {
  		x: _x,
  		y: _y,
  		c: _colour,
  		speedx: random(-1, 1),
  		speedy: random(-15,-2),
  		sz: 5
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
  		ctx.LfillEllipse(p.x, p.y, p.sz, p.sz);
  		ctx.fillStyle = "#000";
  		//if (p.sz > 0.1) ctx.LfillEllipse(p.x, p.y, p.sz/5, p.sz/5);
  		if (p.x < 0 || p.y < 0 || p.x > w || p.sz < 0.1) particles.splice(i,1);
  	};

  }



}();
