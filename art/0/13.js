
rbvj = function(){

var engine = new particleEngine(100);

for (var i = 0; i < engine.particles.length; i++) {

  var p = engine.particles[i];
  p.pos.x =  randomInt(left.x, right.x);
  p.pos.y = randomInt(left.y, right.y);
  p.sz = random(1, 6);
  p.speed.y = posNeg() * random(0.1, 2.9);

}

draw = function() {

  drawLines();
  // ctx.drawImage(video, 0,0,w,h);
  // data = ctx.getImageData(0, 0, width, height);
  ctx.background(0);
  drawLines();



}


function drawLines(){

  ctx.fillStyle = "black";
  ctx.fillRect(left.x, left.y, box_size.x, box_size.y);

  //motionDetection();
  ctx.fillStyle = "white";
  //console.log(motion_array);
  for (var i = 0; i < engine.particles.length; i++) {

    var p = engine.particles[i];
    p.pos.x = left.x;

    // for (var j = 0; j < motion_array.length; j++) {
    //
    //   var m = motion_array[j];
    //
    //   if (p.pos.y >= m.y - pixel_size/2 && p.pos.y < m.y + pixel_size/2
    //     && m.x > left.x && m.x <= right.x - pixel_size
    //     )  {
    //       ctx.fillStyle = "black";
    //       ctx.fillRect(m.x, m.y, pixel_size, pixel_size);
    //       ctx.fillStyle = "white";
    //   }
    //
    // }

    // p.position.y += freqs[0]/8 + p.speed.y * freqs[5]/5;
    p.pos.y += Sound.mapSound(p.me, engine.particles.length) + p.speed.y;
    if (p.pos.y > right.y) {p.pos.y = 0};
    if (p.pos.y < 0) p.pos.y = right.y;

    ctx.fillRect(p.pos.x, p.pos.y, box_size.x, p.sz);

  }
}


}

rbvj();
