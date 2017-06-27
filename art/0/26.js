rbvj = function(){

  ctx.background(0);
  var pixel_size = randomInt(10, 20);
  var line_counter = 0;
  var hh = 0;

  draw = function(){
		ctx.background(0);
		moveParticles();
	}

	moveParticles = function(){

		if (chance(1000)) pixel_size = random(4, 20);

		for (var x = left.x; x < right.x ; x+= pixel_size) {
			for (var y = left.y; y < h ; y+= pixel_size) {
			//p = particles.particles[i];

			s = Sound.mapSound(x + y, 3600, 0, 100);
			ctx.fillStyle = rgb(s);
			//console.log(p.position.x)
			ctx.fillRect(x, y, pixel_size-2, pixel_size-2);
				//ctx.shadowOffsetY = -s/20;
			}


		};

		if (chance(4) || line_counter >= frameCount){

    		if (line_counter < frameCount ) {
                //freqs[0] = randomInt(5, 145);
                line_counter = frameCount + 200;
    }
    	hh++;
    	ctx.fillRect(left.x, right.y, box_size.x, hh);
  }

	}

//this.setup();

}


rbvj();
