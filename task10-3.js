const popBtn = document.querySelector('.pop-btn');
const menu = document.querySelector('.menu');
const form = document.querySelector('.poisk');
const input = document.querySelector('#write');
const search = document.querySelector('.search');
popBtn.addEventListener('click', ()=>{
    menu.classList.toggle("menu-1");
    popBtn.classList.toggle("pop-btn-1");
    
});

input.addEventListener('focusin', ()=>{
    input.style.backgroundColor = "white";
    form.style.backgroundColor = "white";
    search.style.backgroundColor = "white";
});
input.addEventListener('focusout', ()=>{
    input.style.backgroundColor = "rgba(246, 246, 246, 0.583)";
    form.style.backgroundColor = "rgba(246, 246, 246, 0.583)";
    search.style.backgroundColor = "rgba(246, 246, 246, 0.583)";
});