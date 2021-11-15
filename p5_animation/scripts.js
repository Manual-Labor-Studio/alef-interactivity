var node1 = document.getElementById("node-1");
var node2 = document.getElementById("node-2");
var node3 = document.getElementById("node-3");

var connect = function(sketch) {
    var speed = 1.3;
    var x = 80;
    var canvas1;
    sketch.setup = function() {
        canvas1 = sketch.createCanvas(106,97);
        canvas1.parent(node1);
        setInterval(growLine,6000);
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
    var speed = 2;
    var y = 55;
    var canvas2;
    sketch.setup = function() {
        canvas2 = sketch.createCanvas(106,137);
        canvas2.parent(node2);
        setTimeout(function(){
            setInterval(dropConnection,6000);
        },1000);
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
            if(y > 55) {
                clearInterval(drop);
            }
            else {
                y = y + speed;
            }
        },10);
    }
};
  
new p5(build);



var dream = function(sketch) {
    var speed = 0.5;
    var d = 36;
    var grow;
    var canvas3;
    sketch.setup = function() {
        canvas3 = sketch.createCanvas(121,115);
        canvas3.parent(node3);
        setTimeout(function(){
            setInterval(glow,6000);
        },2000);
    }
    sketch.draw = function() {
        sketch.clear();
        //lines
        sketch.strokeWeight(3);
        sketch.line(18,26,82,26);
        sketch.line(18,90,82,90);
        //circles
        sketch.fill(0);
        sketch.strokeWeight(0);
        sketch.ellipse(26,90,36);
        sketch.ellipse(96,26,36);
        sketch.fill(116,250,252);
        sketch.ellipse(96,90,36);
        sketch.fill(112,59,244);
        sketch.ellipse(26,26,36);
        //glowing
        sketch.fill(112,59,244,30);
        sketch.ellipse(26,26,d);
        sketch.fill(116,250,252,50);
        sketch.ellipse(96,90,d);
    }
    function glow(){
        clearInterval(grow);
        d = 35;
        var large = true;
        var count = 0;
        grow = setInterval(function(){
            if(d>50) {
                large = false;
            }
            else if(d < 35) {
                count++;
                large = true;
            }
            if(large) {
                d = d + speed;
            }
            else {
                d = d - speed;
            }
            if(count>2) {
                clearInterval(grow);
            }
        },10);
    }
};
  
new p5(dream);