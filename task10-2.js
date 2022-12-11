const btnClose = document.querySelector('.btn-close');
const popBtn = document.querySelector('.pop-btn');
const main = document.querySelector('.main');
const leftPnl = document.querySelector('.left-pnl');
console.log(btnClose,popBtn,main,leftPnl);
popBtn.addEventListener('click', ()=>{
    leftPnl.style.width = "250px";
    main.style.padding = "0 0 0 255px";
    popBtn.style.display = "none";
});
btnClose.addEventListener('click', ()=>{
    leftPnl.style.width = "0";
    main.style.padding = "10px 0 0 10px";
    popBtn.style.display = "block";
});
