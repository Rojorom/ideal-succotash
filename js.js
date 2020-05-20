
let parallax = document.querySelector('.parallax');

function scrollparallax(){
    let scrolltop = document.documentElement.scrollTop;
    parallax.style.transform ='translateY(' + scrolltop * -0.5 +'px)';
    titulo.style.transform ='translateY(' + scrolltop * 0.3 +'px)';
} 
window.addEventListener('scroll', scrollparallax);

document.querySelector('.menuBtn').addEventListener('click', ()=>{
  document.querySelector('.nav-menu').classList.toggle('show');  
});