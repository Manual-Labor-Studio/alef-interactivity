var cards = document.querySelectorAll(".card div");

cards.forEach(el => {
    el.addEventListener('mouseover', function(){
       el.classList.toggle("move");
       el.style.transition = "0.5s";
    });
});

cards.forEach(el => {
    el.addEventListener('mouseout', function(){
       el.classList.toggle("move");
    });
});

var people = document.querySelectorAll(".person");
var circles = document.querySelectorAll(".person svg");

people.forEach(p => {
    p.addEventListener('mouseover', function(){
        var idx_show = [].indexOf.call(people, p);
        console.log(circles[idx_show]);
        circles[idx_show].classList.toggle("hide");
        circles[idx_show].classList.toggle("show");
    });
});

people.forEach(p => {
    p.addEventListener('mouseout', function(){
        var idx_hide = [].indexOf.call(people, p);
        circles[idx_hide].classList.toggle("show");
        circles[idx_hide].classList.toggle("hide");
    });
});

const slider = document.querySelector('.items');
const grid = document.querySelector("main");
//CIRCLE CURSOR W FOLLOWING DOT
const $bigBall = document.querySelector('.cursor__ball--big');
const $hoverables = document.querySelectorAll('.hoverable');

let isDown = false;
let startX;
let scrollLeft;
var hover = false;
var body = document.querySelector("body");

if(hover == false) {
    slider.addEventListener('mouseover', (e) => {
        $bigBall.classList.toggle("show");
        hover = true;
        body.style.cursor = "none";
    });
}

$bigBall.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  $bigBall.classList.toggle("show");
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
  hover = false;
});

$bigBall.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});




// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
}

// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, .3, {
    scale: 4
  })
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, .3, {
    scale: 1
  })
}