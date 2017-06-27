var output_array = [];

function sendToSpace() {
  var imgData=ctx.getImageData(0,0,w,h);
  sourceBuffer32 = new Uint32Array(imgData.data.buffer);
  output_array = [];
  for (var y = left.y; y < right.y; y+=10) {
    for (var x = left.x; x < right.x; x+=10) {
      var c = sample(x,y);
      output_array.push(c);
      // output_array.push(c.r);
      // output_array.push(c.g);
      // output_array.push(c.b);
    }
  }
  //var compressed = LZString.compress(output_array);
  //console.log(output_array.length);
  //console.log(compressed);
}

RGBToBin = function(r,g,b){
    var bin = r << 16 | g << 8 | b;
    return (function(h){
        return new Array(25-h.length).join("0")+h
    })(bin.toString(2))
}


function sample(x, y) {
         var pos = (x + y * w);
         var b = (sourceBuffer32[pos] >> 16) & 0xff;
         var g = (sourceBuffer32[pos] >> 8) & 0xff;
         var r = (sourceBuffer32[pos] >> 0) & 0xff;
         //return rgb(r,g,b);
         return RGBToBin(r,g,b);
         //return {r:r, g: g, b: b}
}
