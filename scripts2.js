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
