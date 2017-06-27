
rbvj = function(){


  var pixel_size = 10;
  var ray_width = pixel_size;
  var me_counter = 0;
  var line_counter = 0;
  var ray_ht = h;
  ctx.background(0);

draw = function() {
  ray_width = pixel_size;
  lightRay();
}

function lightRay(){

//    motionDetection();

    //var f = Math.sin(freqs[1]/frameCount) * 0.15;
    ctx.background(0);
    //ray_width = (pixel_size + random(-10, 10)/5)/3;


if (chance(900) || me_counter >= frameCount){

    if (me_counter < frameCount ) {
        //freqs[0] = randomInt(5, 45);
        me_counter = frameCount + randomInt(5, 45)*8;
    }

    whiteBurst("#0d014b", "black");

  } else {

    whiteBurst("black", "white");

  }

if (chance(900) || line_counter >= frameCount){

    if (line_counter < frameCount ) {
                // freqs[0] = randomInt(5, 145);
                line_counter = frameCount + randomInt(5, 145)*8;
    }
    ray_ht = h/2 + Math.sin((frameCount)/2000) * h/2;
  }
}

function whiteBurst(c1, c2){

    ctx.fillStyle = c1;
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = c2;
    //ctx.fillStyle = "blue"
    ctx.fillRect(w/2-ray_width, left.y + (h - ray_ht), 2*ray_width, h);
    // if (c1 == "black") {ctx.fillStyle = rgba(0, 191 , 240, 1); } else {
    //     ctx.fillStyle = "#efefef";
    // }
    // (x1, y1, x2, y2, x3, y3)
    //ctx.fillTriangle(w/2+ray_width/2, h - ray_ht, w/2+ray_width/2, h, right.x -20, h)

}


}

rbvj();
