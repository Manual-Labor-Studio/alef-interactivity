var connect = function(sketch) {
    var speed = 1.3;
    var x = 19;
    var canvas1;
    sketch.setup = function() {
        canvas1 = sketch.createCanvas(106,97);
        canvas1.mouseOver(growLine);
        sketch.fill(0);
    
    }
    sketch.draw = function() {
        sketch.clear();
        sketch.strokeWeight(0);
        sketch.ellipse(18,79,36);
        sketch.ellipse(88,79,36);
        sketch.strokeWeight(3);
        sketch.line(18,79,x,79);
    }
    function growLine(){
        x = 19;
        var grow = setInterval(function(){
            x = x + speed;
            if(x >= 80) {
                clearInterval(grow);
            }
        },10);
        
    }
};
  
new p5(connect);
  

var build = function(sketch) {
    var speed = 1.3;
    var y = 58;
    var canvas2;
    sketch.setup = function() {
        canvas2 = sketch.createCanvas(106,137);
        canvas2.mouseOver(dropConnection);
        sketch.fill(0);
    }
    sketch.draw = function() {
        sketch.clear();
        sketch.strokeWeight(0);
        //bottom
        sketch.ellipse(18,119,36);
        sketch.ellipse(88,119,36);
        //top
        sketch.ellipse(18,y,36);
        sketch.ellipse(88,y,36);
        sketch.strokeWeight(3);
        sketch.line(18,119,82,119);
        sketch.line(18,y,82,y);
    }
    function dropConnection(){
        y = 18;
        var drop = setInterval(function(){
            y = y + speed;
            if(y >= 58) {
                clearInterval(drop);
            }
        },10);
    }
};
  
new p5(build);



var dream = function(sketch) {
    var speed = 1;
    var d = 36;
    var grow;
    var canvas3;
    sketch.setup = function() {
        canvas3 = sketch.createCanvas(106,97);
        canvas3.mouseOver(glow);
    }
    sketch.draw = function() {
        sketch.clear();
        //lines
        sketch.strokeWeight(3);
        sketch.line(18,18,82,18);
        sketch.line(18,79,82,79);
        //circles
        sketch.fill(0);
        sketch.strokeWeight(0);
        sketch.ellipse(18,79,36);
        sketch.ellipse(88,18,36);
        sketch.fill(116,250,252);
        sketch.ellipse(88,79,d);
        sketch.fill(112,59,244);
        sketch.ellipse(18,18,d);
        //glowing
        /*sketch.fill(112,59,244,30);
        sketch.ellipse(18,18,d);
        sketch.fill(116,250,252,50);
        sketch.ellipse(88,79,d);*/
    }
    function glow(){
        d = 0;
        grow = setInterval(function(){
            d = d + speed;
            if(d>=36) {
                clearInterval(grow);
            }
        },10);
    }
};
  
new p5(dream);