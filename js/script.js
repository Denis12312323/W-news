const btnLines = document.querySelector('.header__burger');


const btnClose = document.querySelector('.close');

const navEl = document.querySelector('.header-nav');

btnLines.addEventListener("click", ()=>{
    navEl.classList.add('active');
})

btnClose.addEventListener("click", ()=>{
    navEl.classList.remove('active');
})