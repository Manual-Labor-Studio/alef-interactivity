var products = document.querySelectorAll(".product");
var module = document.querySelector(".module");
var circles = document.querySelectorAll(".text-svg svg");
var state = 1;
var previous = 0;
var mod_width = module.offsetWidth;
var mod_height = module.offsetHeight;
var centerX = mod_width/2;
var centerY = mod_height/2;
var radius;
if(centerY > centerX) {
    radius = (mod_width/2)-60;
}
else {
    radius = (mod_height/2)-60;
}

var angle = 0;
var speed = 5;
var particle_speed = 1.25;
var particle_angle = 0;
var ran_img;
var logo_img;
var circle_img;
var blue_circle_img;
var scale1 = 1.4;
var scale2 = 0.80;

function preload() {
    ran_img = loadImage('assets/RAN.png');
    logo_img = loadImage('assets/Logo.png');
    circle_img = loadImage('assets/Circle1.png');
    blue_circle_img = loadImage('assets/CircleBlue.png');
}

function setup() {
    var myCanvas = createCanvas(mod_width, mod_height);
    myCanvas.parent(module);
    rectMode(CENTER);
    imageMode(CENTER);
    angleMode(DEGREES);
}

function windowResized() {
    mod_width = module.offsetWidth;
    mod_height = module.offsetHeight;
    centerX = mod_width/2;
    centerY = mod_height/2;
    if(centerY > centerX) {
        radius = (mod_width/2)-60;
    }
    else {
        radius = (mod_height/2)-60;
    }
    myCanvas = resizeCanvas(mod_width, mod_height);
  }
  
function draw() {
    clear();
    if(angle == 360) {
        angle = 0;
    }

    if(state == 3) {
        //stroke(116, 250, 252);
        image(blue_circle_img, centerX, centerY, radius*2.1, radius*2.1);
    }

    else  {
        //stroke(124, 124, 124);
        image(circle_img, centerX, centerY, radius*2.1, radius*2.1);
    }

    //IMAGES 
    if(state == 1 && angle == 90) {
        image(ran_img, centerX, centerY, scale1*radius, scale1*ran_img.height*radius/ran_img.width);
    }
    if(state == 2 && angle == 270) {
        image(logo_img, centerX, centerY, scale2*radius, scale2*logo_img.height*radius/logo_img.width);
    }

    /*strokeWeight(15);
    noFill();
    setLineDash([15, 13]); //longer stitches
    ellipse(centerX, centerY, radius*2, radius*2);*/



    noStroke();
    // translate to point to rotate around
    translate(centerX, centerY);

    rotate(angle);
    if(state == 1 && angle == 90) {
        speed = 0;
        fill(116, 250, 252, 85);
        ellipse(-radius, 0, radius/1.6, radius/1.6);
    }

    if(state == 2 && angle == 270) {
        speed = 0;
        fill(116, 250, 252, 85)
        ellipse(radius, 0, radius/1.6, radius/1.6);
    }

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
        ellipse(radius, 0, radius/5, radius/5);
        if(particle_angle >= 120 && particle_angle < 300) {
            fill(112, 59, 244);
        }
        else {
            fill(0);
        }
        var a1  = 30;
        var x1 = radius * Math.sin(Math.PI * 2 * a1 / 360);
        var y1 = radius * Math.cos(Math.PI * 2 * a1 / 360);
        ellipse(x1, y1, radius/5, radius/5);
        if(particle_angle >= 150 && particle_angle < 330) {
            fill(112, 59, 244);
        }
        else {
            fill(0);
        }
        var a2  = 60;
        var x2 = radius * Math.sin(Math.PI * 2 * a2 / 360);
        var y2 = radius * Math.cos(Math.PI * 2 * a2 / 360);
        ellipse(x2, y2, radius/5, radius/5);



        if(particle_angle >= 180) {
            fill(0);
        }
        else {
            fill(112, 59, 244);
        }
        ellipse(-radius, 0, radius/5, radius/5);
        if(particle_angle >= 120 && particle_angle < 300) {
            fill(0);
        }
        else {
            fill(112, 59, 244);
        }
        var a4  = 150;
        var x4 = radius * Math.sin(Math.PI * 2 * a4 / 360);
        var y4 = radius * Math.cos(Math.PI * 2 * a4 / 360);
        ellipse(-x4, y4, radius/5, radius/5);
        if(particle_angle >= 150 && particle_angle < 330) {
            fill(0);
        }
        else {
            fill(112, 59, 244);
        }
        var a3  = 120;
        var x3 = radius * Math.sin(Math.PI * 2 * a3 / 360);
        var y3 = radius * Math.cos(Math.PI * 2 * a3 / 360);
        ellipse(-x3, y3, radius/5, radius/5);

        speed = 0;
        rotate(-particle_angle);

        particle_angle = particle_angle + particle_speed;
    }

    // draw shape as though (centerX, centerY) is the new
    // origin / (0, 0) point
    fill(0);
    ellipse(radius, 0, radius/2, radius/2);

    fill(112, 59, 244);
    ellipse(-radius, 0, radius/2, radius/2);
    angle = angle + speed;
}

/*function setLineDash(list) {
    drawingContext.setLineDash(list);
}*/

products.forEach(function(p, idx) {
    p.addEventListener('mouseover', function(){
        state = idx+1;
        speed = 5;
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
            circles[i].classList.remove("hide");
        }
        else {
            products[i].classList.add("not-hover");
            circles[i].classList.add("hide");
        }
    }
}
