var connect = function(sketch) {
    var speed = 0.5;
    var x = 19;
    var canvas1;
    sketch.setup = function() {
        canvas1 = sketch.createCanvas(106,97);
        canvas1.position(0,0);
        canvas1.mouseOver(growLine);
        sketch.fill(0);
        sketch.strokeWeight(3);
    }
    sketch.draw = function() {
        sketch.clear();
        sketch.ellipse(20,77,36);
        sketch.ellipse(86,77,36);
        sketch.line(20,77,x,77);
    }
    function growLine(){
        x = 19;
        var grow = setInterval(function(){
            x = x + speed;
            if(x == 80) {
                clearInterval(grow);
            }
        },10);
        
    }
};
  
// create a new instance of p5 and pass in the function for sketch 1
new p5(connect);
  