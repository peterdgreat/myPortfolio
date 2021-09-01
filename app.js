const menu = document.querySelector('#hamburger');
const menuList = document.querySelector('.menu-list');
const navBar = document.querySelector('.nav-bar');
const closeBtn = document.querySelector('.delete');
const mail = document.querySelector('#mail');
const logo = document.querySelector('.logo');
const menuItem = document.querySelectorAll('.menu-item');

const projWork = document.getElementsByClassName('proj-work');

const projectsList = [
  {
    title: 'A Weather App',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    langs: ['html', 'bootstrap', 'Javascript'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/N-Weather-App',
    live: ' https://n-weather.netlify.app/',
  },
  {
    title: 'A Weather App',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    langs: ['html', 'bootstrap', 'Javascript'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/N-Weather-App',
    live: ' https://n-weather.netlify.app/',
  },
  {
    title: 'A Weather App',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    langs: ['html', 'bootstrap', 'Javascript'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/N-Weather-App',
    live: ' https://n-weather.netlify.app/',
  },
  {
    title: 'A Weather App',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    langs: ['html', 'bootstrap', 'Javascript'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/N-Weather-App',
    live: ' https://n-weather.netlify.app/',
  },
  {
    title: 'A Dynamic App',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    langs: ['html', 'bootstrap', 'Javascript'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/N-Weather-App',
    live: ' https://n-weather.netlify.app/',
  },
  {
    title: 'A start App',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    langs: ['html', 'bootstrap', 'C++'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/N-Weather-App',
    live: ' https://n-weather.netlify.app/',
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
// projWork.forEach((projs) => {
for (let projs = 0; projs < projWork.length; projs += 1) {
  projWork[projs].classList.add('proj-work-j');
  const projNodes = projWork[projs].childNodes;
  const btn = document.createElement('button');
  projNodes[1].innerHTML = projectsList[projs].title;
  projNodes[3].innerHTML = projectsList[projs].details;
  for (let listItem = 0; listItem < projectsList[0].langs.length; listItem += 1) {
    projNodes[5].appendChild(newLi()).innerHTML = projectsList[projs].langs[listItem];
    projNodes[7].appendChild(btn).innerHTML = projectsList[projs].btn;
    projNodes[7].appendChild(btn).classList.add('proj-btn', 'see');
  }
}
