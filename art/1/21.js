rbvj = function(){

  ctx.background(0);
  var pixel_size = 3;

  draw = function() {
    scanLines();
  }

function scanLines(){

//  motionDetection();
  ctx.fillStyle = "black";
  ctx.fillRect(left.x, left.y, box_size.x, box_size.y);
  ctx.fillStyle = "white";
    var count = 0;

    for (var y = left.y; y < right.y; y += pixel_size) {

      if (count%2 == 0 && chance(2)) {
        ctx.fillRect(left.x , y, box_size.x, pixel_size);
      }

      count++;

  }
}



}

rbvj();
