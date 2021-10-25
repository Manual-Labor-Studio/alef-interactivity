// How long you want the animation to take, in ms
const animationDuration = 2000;
// Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
const frameDuration = 1000 / 60;
// Use that to calculate how many frames we need to complete the animation
const totalFrames = Math.round(animationDuration / frameDuration);
// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * (2 - t);

// The animation function, which takes an Element
const animateCountUp = el => {
    let frame = 0;
    var end = "";
    const countTo = parseInt(el.innerHTML, 10);
    // Start the animation running 60 times per second
    const counter = setInterval(() => {
        frame++;
        // Calculate our progress as a value between 0 and 1
        // Pass that value to our easing function to get our
        // progress on a curve
        const progress = easeOutQuad(frame / totalFrames);
        // Use the progress value to calculate the current count
        const currentCount = Math.round(countTo * progress);

        // If the current count has changed, update the element
        if (parseInt(el.innerHTML, 10) !== currentCount) {
            if (el.id == "stat-1") {
                end = "X";
            }
            /* ADD IF STATEMENTS HERE TO CHANGE UNIT OF STAT*/
            else if (el.id == "stat-2") {
                end = "%";
            }
            else if (el.id == "stat-3") {
                end = "B";
            }
            el.innerHTML = currentCount + end;
        }

        // If we’ve reached our last frame, stop the animation
        if (frame === totalFrames) {
            clearInterval(counter);
        }
    }, frameDuration);
};

// Run the animation on all elements with a class of ‘countup’
const runAnimations = () => {
    const countupEls = document.querySelectorAll('.countup');
    countupEls.forEach(animateCountUp);
};

var stat;
var windowHeight;

function init() {
  stat = document.querySelector('.stats-container');
  windowHeight = window.innerHeight;
}

function checkPosition() {
  var positionFromTop = stat.getBoundingClientRect().top;

  if (positionFromTop - windowHeight <= 0) {
    runAnimations();
    window.removeEventListener('scroll', checkPosition);
  }
}

init();

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', init);  