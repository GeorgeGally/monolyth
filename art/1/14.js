rbvj = function(){

  ctx.background(0);
  pixel_size = 5;


draw = function() {
  pixelNoise();
}

function pixelNoise(){

 // motionDetection();

  ctx.background(0);
  ctx.fillStyle = "black";

  ctx.fillRect(left.x, left.y, box_size.x, box_size.y);
  ctx.fillStyle = "white";

  if (chance(50)) {
      //pixel_size = Math.sin(frameCount/10000) * 32;
    pixel_size = 2 + randomInt(2,5);

  }


  for (var x = left.x; x < left.x + box_size.x; x += pixel_size) {

    for (var y = left.y; y < right.y; y += pixel_size) {

      if (chance(4)) ctx.fillRect(x , y, pixel_size, pixel_size);

    }

  }

  ctx.fillStyle = "black";
  var pos = Math.sin(frameCount/50) * h *2;
  ctx.fillRect(left.x - 50, pos, box_size.x + 150, 300);

}




}

rbvj();
