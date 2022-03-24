var slidePosition = 1;
SlideShow(slidePosition);

// forward/back buttons
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

//images controls
function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("img-carousel");
    if (n > slides.length) {
        slidePosition = 1
    }
    if(n < 1){
        slidePosition = slides.length
    }
    for (i = 0; i < slides.length; i++ ){
        slides[i].style.display = "none";
    }
    slides[slidePosition-1].style.display = "block";
    setTimeout(SlideShow, 2000);
}

//Guest Details

var double = 120;
var twin = 120;
var family = 150;
var manyNights = document.getElementsByName("departure") - document.getElementsByName("arrival");

function calculateRoom() {
    if (document.getElementById("doubleroom").click == true) {
        var total = manyNights * double;
    }
    if (document.getElementById("familyroom").click == true) {
        total = manyNights * family;
        
    }
    if (document.getElementById("twinroom").click == true) {
        total = manyNights * twin;
        
    }
}