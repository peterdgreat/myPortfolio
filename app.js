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
    title: 'A Youtube Page Clone',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    langs: ['html', 'bootstrap', 'Css'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/youtube-homepage',
    live: 'https://youtube-page.netlify.app ',
  },
  {
    title: 'The Shoppies',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    langs: ['html', 'bootstrap', 'Angular'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/The-Shoppies',
    live: ' https://a-the-shoppies.netlify.app',
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
    title: 'A Business Website',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    langs: ['html', 'bootstrap', 'Css'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/cableworks',
    live: ' https://hardcore-haibt-e46ee5.netlify.app',
  },
  {
    title: 'A Website Portfolio',
    details: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    langs: ['html', 'Css', 'Javascript'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/myPortfolio',
    live: ' https://peterdgreat.github.io/myPortfolio/',
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
