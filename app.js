const menu = document.querySelector('#hamburger');
const menuList = document.querySelector('.menu-list');
const navBar = document.querySelector('.nav-bar');
const closeBtn = document.querySelector('.delete');
const mail = document.querySelector('#mail');
const logo = document.querySelector('.logo');
const menuItem = document.querySelectorAll('.menu-item');

const projWork = document.querySelectorAll('.proj-work');

const projectsList = [
  {
    title: 'Profesional Art Printing Data',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    langs: ['html', 'bootstrap', 'ruby'],
    btn: 'see project',
    img: './img/Mask-Group.png',
  }];

function toggleButton() {
  menuList.classList.toggle('show');
  navBar.classList.toggle('height');
  closeBtn.classList.toggle('d-none');
  menu.classList.toggle('d-none');
  mail.classList.toggle('d-none');
  logo.classList.toggle('d-none');
}

menu.addEventListener('click', toggleButton);
closeBtn.addEventListener('click', toggleButton);
menuItem.forEach((menu) => {
  menu.addEventListener('click', (toggleButton));
});

// To create a new li
const newLi = (() => {
  const li = document.createElement('li');
  return li;
});

// projWork.innerHTML = projectsList[0].title;
projWork.forEach((projs) => {
  projs.classList.add('proj-work-j');
  const projNodes = projs.childNodes;
  const btn = document.createElement('button');
  projNodes[1].innerHTML = projectsList[0].title;
  projNodes[3].innerHTML = projectsList[0].details;
  for (let listItem = 0; listItem < projectsList[0].langs.length; listItem += 1) {
    projNodes[5].appendChild(newLi()).innerHTML = projectsList[0].langs[listItem];
  }
  projNodes[7].appendChild(btn).innerHTML = projectsList[0].btn;
  projNodes[7].appendChild(btn).classList.add('see', 'proj-btn');
  console.log(projNodes[7].appendChild(btn));

//  console.log(projNodes[5]);
});
