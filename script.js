var crsr = document.querySelector('.cursor')
var crsr_blur = document.querySelector('.cursor-blur')
var navTags = document.querySelectorAll('.nav>h4, .nav>img')

document.addEventListener('mousemove', function(dets){
    crsr.style.left = dets.x + 'px'
    crsr.style.top = dets.y + 'px'
    crsr_blur.style.left = dets.x - 250 + 'px'
    crsr_blur.style.top = dets.y - 250 + 'px'
})

navTags.forEach(function(elem){
    elem.addEventListener('mouseenter', function(){
        crsr.style.scale = 4
        crsr.style.border = '1px solid #fff'
        crsr.style.backgroundColor = 'transparent'
        // crsr.style.zIndex = 
    })
    elem.addEventListener('mouseleave', function(){
        crsr.style.scale = 1
        crsr.style.border = 'none'
        crsr.style.backgroundColor = '#95C11E'
        crsr.style.transition = 'none'
        elem.style.color = '#fff'
    })
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideImage");
  let dots = document.getElementsByClassName("imageChanger");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.transition = "all ease 0.5s";
  dots[slideIndex-1].className += " active";
}

gsap.to(".nav", {
    backgroundColor: '#000',
    height: '100px',
    duration: 0.5,
    scrollTrigger:{
        scroller: 'body',
        trigger: '.nav',
        // markers: true,
        start: 'top -10%',
        end: 'top -11%',
        scrub: 1,
    }
})

gsap.to(".main", {
    backgroundColor: '#000',
    scrollTrigger:{
        trigger: '.main',
        scroller: 'body',
        // markers: true,
        start: 'top -25%',
        end: 'top -70%',
        scrub: 2
    }
})

gsap.from('.aboutUs img, .center', {
    y: 90,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.aboutUs',
        scroller: 'body',
        start: 'top 60%',
        end: 'top 55%',
        scrub: 2
    }
})

gsap.from('.card', {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
    scrollTrigger: {
        trigger: '.card',
        scroller: 'body',
        start: 'top 75%',
        end: 'top 65%',
        scrub: 0.3
    }
})

gsap.from('.colon1', {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: '.colon1',
        scroller: 'body',
        start: 'top 55%',
        end: 'top 45%',
        scrub: 2
    }
})

gsap.from('.colon2', {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: '.colon1',
        scroller: 'body',
        start: 'top 55%',
        end: 'top 45%',
        scrub: 3
    }
})

gsap.from('.page4 h1', {
    y: 50,
    scrollTrigger: {
        trigger: '.page4 h1',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 75%',
        scrub: 3
    }
})

gsap.from('.imgScroller', {
    scale: 0.8,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: '.imgScroller',
        scroller: 'body',
        start: 'top 70%',
        end: 'top 50%',
        scrub: 3
    }
})