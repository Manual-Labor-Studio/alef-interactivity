var cards = document.querySelectorAll(".card div");

cards.forEach(el => {
    el.addEventListener('mouseover', function(){
       el.classList.toggle("move");
       el.style.transition = "0.5s";
       el.addEventListener('mouseout', function(){
            el.classList.toggle("move");
       });
    });
});