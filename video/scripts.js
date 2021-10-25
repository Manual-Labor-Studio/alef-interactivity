const play = document.querySelector('.play');
const circle_div = document.querySelector('.circle');
const video = document.querySelector('video');
const close = document.querySelector('.close');

var full_screen = false;


play.addEventListener('mouseover', function() {
    if(full_screen == false) {
        video.classList.remove("circle_hide");
        video.play();
    }
});

play.addEventListener('mouseout', function(){
    if(full_screen == false) {
        video.classList.add("circle_hide");
    }
});

play.addEventListener('click', function(){
    if(full_screen == false) {
        full_screen = true;
        video.pause();
        video.currentTime = 0;
        video.controls = true;
        video.classList.remove('circle_video');
        video.classList.add('full_video');
        close.classList.toggle('toggle_close');
        setTimeout(function(){
            video.play();
        }, 2000);
    }
});

document.addEventListener('keydown', function(event){
	if(event.key === "Escape" && full_screen == true) {
        close_video();
	}
});

close.addEventListener('click', function() {
    if(full_screen == true) {
        close_video();
    }
});

function close_video(){
    close.classList.toggle('toggle_close');
    video.controls = false;
    video.classList.remove('full_video');
    video.classList.add('circle_video');
    video.classList.add('circle_hide');
    full_screen = false;
}