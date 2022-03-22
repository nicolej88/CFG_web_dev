const carouselslide = document.querySelector(".carousel-slide");
const slideImg = document.querySelectorAll('.slide img');


//buttons
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');


let count = 1;
const size = slideImg[0].clientWidth;


carouselslide.style.transform ='translateX(' + (-size*count) + 'px)';

//button listeners

rightArrow.addEventListener('click', () => {
    if (count >= slideImg.length - 1) return;
    carouselslide.style.transition = 'transform 0.5s ease-in-out';
    count ++;
    console.log(count)
    carouselslide.style.transform = 'translateX(' + (-size * count) + 'px)';
})

leftArrow.addEventListener('click', () => {
    if(count <= 0) return;
    carouselslide.style.transition = 'transform 0.5s ease-in-out';
    count--;
    console.log(count)
    carouselslide.style.transform = 'translateX(' + (-size * count) + 'px)';
})


carouselslide.addEventListener('transitionend', () => {
    if(slideImg[count].id == "last-clone") {
        console.log(slideImg[count].id)
        carouselslide.style.transition = "none";
        count = slideImg.length -2;
        carouselslide.style.transform = 'translateX(' + (-size * count) + 'px)';
}

    if(slideImg[count].id == "first-clone") {
        carouselslide.style.transition = "none";
        count = slideImg.length - count;
        carouselslide.style.transform = 'translateX(' + (-size * count) + 'px)';
    }
});