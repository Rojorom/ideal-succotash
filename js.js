
let parallax = document.querySelector('.parallax');
let titulo = document.querySelector('.titulo');


function scrollparallax(){
    let scrolltop = document.documentElement.scrollTop;
    parallax.style.transform ='translateY(' + scrolltop * -0.7 +'px)';
    titulo.style.transform ='translateY(' + scrolltop * 0.07 +'px)';
} 
window.addEventListener('scroll', scrollparallax);

document.querySelector('.menuBtn').addEventListener('click', ()=>{
  document.querySelector('.nav-menu').classList.toggle('show');  
});
