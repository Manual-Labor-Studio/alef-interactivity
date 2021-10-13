//CIRCLE CURSOR W FOLLOWING DOT
/*const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener('mouseenter', onMouseHover);
  $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, .4, {
    x: e.clientX - 15,
    y: e.clientY - 15
  })
  TweenMax.to($smallBall, .1, {
    x: e.clientX - 5,
    y: e.clientY - 7
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
}*/


//CIRCLE NEG CURSOR 
/*const $cursor = document.querySelector('.cursor__circle');
const $hover = document.querySelectorAll('a');


document.body.addEventListener('mousemove', onMouseMove);
for (let i = 0; i < $hover.length; i++) { $hover[i].addEventListener('mouseenter', onMouseHover); $hover[i].addEventListener('mouseleave', onMouseHoverOut);
}


function onMouseMove(e) {
  TweenMax.to($cursor, .4, {
    x: e.pageX - 16,
    y: e.pageY - 16
  })
}


function onMouseHover() {
  TweenMax.to($cursor, .4, {
    scale: 3
  })
}
function onMouseHoverOut() {
  TweenMax.to($cursor, .4, {
    scale: 1
  })
}*/
   

/*var play_button = document.querySelector(".home");
var big_ball = document.querySelector(".cursor__ball--big svg circle");
console.log(play_button);
play_button.addEventListener("click", function(){
  alert("hi");
  big_ball.setAttribute("fill", "white");
}, false);*/

// How long you want the animation to take, in ms
const animationDuration = 2000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round( animationDuration / frameDuration );
// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * ( 2 - t );

// The animation function, which takes an Element
const animateCountUp = el => {
  let frame = 0;
  var end = "";
  const countTo = parseInt( el.innerHTML, 10 );
  // Start the animation running 60 times per second
  const counter = setInterval( () => {
    frame++;
    // Calculate our progress as a value between 0 and 1
    // Pass that value to our easing function to get our
    // progress on a curve
    const progress = easeOutQuad( frame / totalFrames );
    // Use the progress value to calculate the current count
    const currentCount = Math.round( countTo * progress );

    // If the current count has changed, update the element
    if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
      if(el.id == "stat-1") {
        end = " X";
      }
      else if(el.id == "stat-2") {
        end = " %";
      }
      else if(el.id == "stat-3") {
        end = " B";
      }
      el.innerHTML = currentCount + end;
    }

    // If we’ve reached our last frame, stop the animation
    if ( frame === totalFrames ) {
      clearInterval( counter );
    }
  }, frameDuration );
};

// Run the animation on all elements with a class of ‘countup’
const runAnimations = () => {
  const countupEls = document.querySelectorAll( '.countup' );
  countupEls.forEach( animateCountUp );
};

runAnimations();

AOS.init();

