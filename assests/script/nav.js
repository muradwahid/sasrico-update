const toggle = document.querySelector('.toggle');
const hamburger = document.querySelector('.hamburger')
const xMark = document.getElementById('xMark');
const sidebarNav = document.querySelector('.sidebarNav');
const homePage = document.querySelector('.homePage');
const homeChild = document.querySelector('.homeChild');
const blogPage = document.querySelector('.blogPage')
toggle.addEventListener('click', () => {
  if (xMark.className === 'fa-solid fa-xmark hidden') {
    xMark.classList.remove('hidden');
    hamburger.classList.add('hidden')
    sidebarNav.style.left='-13%'
  }
  else {
  xMark.classList.add('hidden');
    hamburger.classList.remove('hidden')
    sidebarNav.style.left = '-1000px'
  }
})

let toggleBoolean = true;
homePage.addEventListener('click', () => {
  const homeCaret = document.querySelector('.homeCaret');
  if (toggleBoolean) {
    homeChild.style.display = 'block';
    homeCaret.style.rotate='180deg'
    toggleBoolean = false;
  } else {
    homeChild.style.display = 'none';
    homeCaret.style.rotate = '0deg'
    toggleBoolean = true;
  }
})
let toggleBoolean2 = true;
blogPage.addEventListener('click', () => {
  const blogChild = document.querySelector('.blogChild');
  if (toggleBoolean2) {
    blogChild.style.display = 'block';
    toggleBoolean2 = false;
  } else {
    blogChild.style.display='none'
    toggleBoolean2 = true;
  }
})

window.addEventListener('scroll', () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY>0)
})