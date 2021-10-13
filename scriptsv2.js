var cards = document.querySelectorAll(".card div");

cards.forEach(el => {
    el.addEventListener('mouseover', function(){
      el.classList.toggle("movev2");
      el.style.transition = "0.5s";
    });
});

cards.forEach(el => {
    el.addEventListener('mouseout', function(){
       el.classList.toggle("movev2");
    });
});