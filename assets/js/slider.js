var checkedSlide = 1;
const numberOfSlides = document.getElementById('index-slideshow').dataset.nbSlides;

function setSlide(slideNumber) {
    // Check the input linked to the slide
    var slideElement = document.getElementById('input-slide-'+slideNumber);
    slideElement.checked = true;
    checkedSlide = slideNumber;
    console.log('slide changed to '+checkedSlide);
    // Move the all-slides obkect to the right position
    var allSlides = document.getElementById('index-slideshow').querySelector('.all-slides');
    allSlides.style.left = -(slideNumber-1)*100+"%";
    console.log('slide moved to ', -(slideNumber-1)*100+"%")
}

function goToRightSlide() {
    slideToSet = checkedSlide + 1;
    if (slideToSet > numberOfSlides) {
        slideToSet = 1;
    }
    setSlide(slideToSet);
}

function goToLeftSlide() {
    slideToSet = checkedSlide - 1;
    if (slideToSet <= 0) {
        slideToSet = numberOfSlides;
    }
    setSlide(slideToSet);
}