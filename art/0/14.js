rbvj = function(){

  ctx.background(0);
  pixel_size = 28;


draw = function() {
  pixelNoise();
}

function pixelNoise(){

 // motionDetection();

  if (chance(40)) ctx.background(0);
  ctx.fillStyle = "black";

  ctx.fillRect(left.x, left.y, box_size.x, box_size.y);
  ctx.fillStyle = "white";

  if (chance(400)) {
      //pixel_size = Math.sin(frameCount/10000) * 32;
      pixel_size = 2 + randomInt(2,30)*2;
      //pixel_size = freqs[0]/4;
      //freqs[0] = (pixel_size*3 + 25)%100;

  }

  if (chance(4)) {
  for (var x = left.x; x < left.x + box_size.x; x += pixel_size) {

    for (var y = left.y; y < right.y; y += pixel_size) {

      if (chance(4)) ctx.fillRect(x , y, pixel_size, pixel_size);

    }

  }
}
}




}

rbvj();
