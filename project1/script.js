console.log('hello');

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let text= document.getElementById('text');
let btn = document.getElementById('btn');
let  mountains_behind= document.getElementById('mountains_behind');
let mountain_front = document.getElementById('mountain_front');

let header = document.querySelector('header');

window.addEventListener('scroll',function()
{
    let value = window.scrollY;
    stars.style.left = value*0.25 + 'px';
    moon.style.top = value*1.2 + 'px';
    text.style.marginRight = value*3 + 'px';
    text.style.marginTop = value*1 + 'px';
    mountains_behind.style.top = value*0.35 + 'px';
    mountain_front.style.top = value*0 + 'px';
    btn.style.marginTop = value*0.75 + 'px';

   header.style.top = value * 0.35 + 'px';

})