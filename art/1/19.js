

rbvj = function(){

  ctx.background(0);

  var circs = [];
  var r = width/2-10;
  ctx.lineWidth = 1;
  var j = 0;
  var vol = 0;
  var speed = 2;
  var down = true;


  for (var _y= 10; _y < h-10; _y+=20){

    for (var _x= left.x; _x< right.x; _x+=box_size.x/4){

      var circle =  {
        r: r,
        me: j,
        x: _x,
        y: _y,
        myfill: rgb(255)
      }
      circs.push(circle);
    }

  j++;

 }

draw = function()  {


  ctx.background(0);
  ctx.fillStyle = "black";
  ctx.fillRect(left.x, left.y, box_size.x, box_size.y);


  for (var i=0; i<circs.length; i++){

    var p = circs[i];
    //vol = 120*(mic.getSprectrum(i%4096));
    vol = random(6);

    ctx.fillStyle = "#fff";
    ctx.fillRect(p.x, p.y, box_size.x/2, 0 + 2*Math.abs(vol));

}


}







}

rbvj();
