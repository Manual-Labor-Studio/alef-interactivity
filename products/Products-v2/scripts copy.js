var products = document.querySelectorAll(".text div");
var module = document.querySelector(".module");
var state = 1;
var previous = 0;
var mod_width = module.offsetWidth;
var mod_height = module.offsetHeight;
var centerX = mod_width/2;
var centerY = mod_height/2;
var radius = centerY-60;
var angle = 0;
var speed = 2.5;
var particle_speed = 2.5;
var particle_angle = 0;

function setup() {
    var myCanvas = createCanvas(mod_width, mod_height);
    myCanvas.parent(module);
    rectMode(CENTER);
    angleMode(DEGREES);
}

function windowResized() {
    mod_width = module.offsetWidth;
    mod_height = module.offsetHeight;
    centerX = mod_width/2;
    centerY = mod_height/2;
    radius = centerY-40;
    myCanvas = resizeCanvas(mod_width, mod_height);
  }
  
function draw() {
    background(220);
    if(angle == 360) {
        angle = 0;
    }

    if(state == 3) {
        stroke(116, 250, 252);
    }
    else  {
        stroke(79, 79, 79);
    }
    strokeWeight(10);
    noFill();
    setLineDash([20, 20]); //longer stitches
    ellipse(centerX, centerY, radius*2, radius*2);

    noStroke();
    // translate to point to rotate around
    translate(centerX, centerY);
    rotate(angle);
    if(state == 1 && angle == 90) {
        speed = 0;
        fill(116, 250, 252, 85);
        ellipse(-radius, 0, 100, 100);
    }

    if(state == 2 && angle == 270) {
        speed = 0;
        fill(116, 250, 252, 85)
        ellipse(radius, 0, 100, 100);
    }

    if(state == 3 && angle == 0) {
        speed = 0;
    }

    // draw shape as though (centerX, centerY) is the new
    // origin / (0, 0) point
    fill(0);
    ellipse(radius, 0, 80, 80);

    fill(112, 59, 244);
    ellipse(-radius, 0, 80, 80);
    angle = angle + speed;

    if(state == 3 && angle == 0) {
        if(particle_angle == 360) {
            particle_angle = 0;
        }

        
        rotate(particle_angle);

        if(particle_angle >= 180) {
            fill(112, 59, 244);
        }
        else {
            fill(0);
        }
        ellipse(radius, 0, 30, 30);
        if(particle_angle >= 120 && particle_angle < 300) {
            fill(112, 59, 244);
        }
        else {
            fill(0);
        }
        var a1  = 30;
        var x1 = radius * Math.sin(Math.PI * 2 * a1 / 360);
        var y1 = radius * Math.cos(Math.PI * 2 * a1 / 360);
        ellipse(x1, y1, 30, 30);
        if(particle_angle >= 150 && particle_angle < 330) {
            fill(112, 59, 244);
        }
        else {
            fill(0);
        }
        var a2  = 60;
        var x2 = radius * Math.sin(Math.PI * 2 * a2 / 360);
        var y2 = radius * Math.cos(Math.PI * 2 * a2 / 360);
        ellipse(x2, y2, 30, 30);



        if(particle_angle >= 180) {
            fill(0);
        }
        else {
            fill(112, 59, 244);
        }
        ellipse(-radius, 0, 30, 30);
        if(particle_angle >= 120 && particle_angle < 300) {
            fill(0);
        }
        else {
            fill(112, 59, 244);
        }
        var a4  = 150;
        var x4 = radius * Math.sin(Math.PI * 2 * a4 / 360);
        var y4 = radius * Math.cos(Math.PI * 2 * a4 / 360);
        ellipse(-x4, y4, 30, 30);
        if(particle_angle >= 150 && particle_angle < 330) {
            fill(0);
        }
        else {
            fill(112, 59, 244);
        }
        var a3  = 120;
        var x3 = radius * Math.sin(Math.PI * 2 * a3 / 360);
        var y3 = radius * Math.cos(Math.PI * 2 * a3 / 360);
        ellipse(-x3, y3, 30, 30);

        particle_angle = particle_angle + particle_speed;
    }
}

function setLineDash(list) {
    drawingContext.setLineDash(list);
}

products.forEach(function(p, idx) {
    p.addEventListener('mouseover', function(){
        state = idx+1;
        speed = 2.5;
        if(previous != idx) {
            p.style.cursor = "pointer";
            hoverText(p);
            previous = idx;
        }
    });
});

function hoverText(p) {
    for(let i=0; i<products.length; i++) {
        if(products[i] == p) {
            p.classList.remove("not-hover");
        }
        else {
            products[i].classList.add("not-hover");
        }
    }
}
