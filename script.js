const menuMobile = document.querySelector('.menu-mobile');
const btnMobile = document.querySelector('#mobile-menu-btn');
const btnMobileClose = document.querySelector('#close-menu');

btnMobile.onclick = e =>{
menuMobile.classList.toggle('active');
}
btnMobileClose.onclick = e =>{
    menuMobile.classList.toggle('active');
    }