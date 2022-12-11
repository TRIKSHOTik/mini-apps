const button_open = document.querySelector('.popun-btn');
const div = document.querySelector('.popup');
const button_back = document.querySelector('.popup-content');
const button_close = document.querySelector('.popup-close');


button_open.addEventListener('click', (event)=>{
    div.classList.add("opened");
});
button_close.addEventListener('click', (event)=>{
    div.classList.remove("opened");
});
window.addEventListener('click', (event)=>{
    if(event.target == div){
        div.classList.remove("opened");
    }
});
