
let leaf=document.getElementById('leaf');

let hill4=document.getElementById('hill4');
let hill5=document.getElementById('hill5');

window.addEventListener('scroll',()=>{
    let value=window.scrollY;
    
    leaf.style.top=value* -1.5 +'px';
    leaf.style.left=value* 1.5 +'px';
    hill5.style.left=value* 1.5 +'px';
    hill4.style.left=value* -1.5 +'px';
});