const menu=document.querySelector('#hamburger');
const menuList=document.querySelector(".menu-list")
const navBar=document.querySelector(".nav-bar")
const closeBtn=document.querySelector(".delete")


function toggleButton (){
 menuList.classList.toggle('show')
 navBar.classList.toggle('height')
 closeBtn.classList.toggle('d-none');
 menu.classList.toggle('d-none')
}

menu.addEventListener('click',toggleButton);
closeBtn.addEventListener('click',toggleButton)
