var products = document.querySelectorAll(".text div");
var images = document.querySelectorAll(".module img");
var previous = 0;

products.forEach(function(p, idx) {
    p.addEventListener('mouseover', function(){
        if(previous != idx) {
            p.style.cursor = "pointer";
            hoverText(p);
            toggleImage(idx);
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

function toggleImage(idx) {
    images[previous].classList.add("rotate");
    var change = previous;
    setTimeout(function(){
        images[change].classList.remove("rotate");
        images[change].classList.add("hide");
        images[idx].classList.remove("hide");
    }, 4000);
}

/*for(let i=0; i<products.length; i++) {
    if(products[i] == p) {
        p.classList.remove("not-hover");
        setTimeout(function(){
            images[i].classList.remove("rotate");
            images[previous].classList.remove("hide");
        },3000);
    }
    else if(i == previous) {
        images[i].classList.add("rotate");
        products[i].classList.add("not-hover");
        setTimeout(function(){
        }, 3000);
    }   
    else {
        products[i].classList.add("not-hover");
        images[i].classList.add("hide");
    }
}
previous = current;*/