let tl = gsap.timeline({defaults: {ease: "power3.inOut", duration: 1}})
    
tl.from('header',{opacity: 0, y: 50})
.from('.image',{ x: -999})
.from('.details',{x: 999}, "-=1")
.from('.fadeup', {opacity: 0, y: 50, stagger: 0.4})
.from('.button',{ opacity: 0, x : -50})
.from('.swatch',{opacity: 0, y: 50},"-=0.5")
.from('.color-text',{opacity: 0, x: -150}, "-=0.5")

let image = document.querySelector('.bgcolor');

document.querySelector('.black').addEventListener('click', ()=>{
    image.style.background = "url('/img/ford_raptor_black.png') center center/contain no-repeat";
})
document.querySelector('.red')  .addEventListener('click', ()=>{
    image.style.background = "url('/img/ford_raptor_red.png') center center/contain no-repeat";
})
document.querySelector('.gray').addEventListener('click', ()=>{
    image.style.background = "url('/img/ford_raptor_gray.png') center center/contain no-repeat";
})
document.querySelector('.blue').addEventListener('click', ()=>{
    image.style.background = "url('/img/ford_raptor_blue.png') center center/contain no-repeat";
})