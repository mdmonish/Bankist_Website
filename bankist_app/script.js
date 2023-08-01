'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//creating new element
const topHead= document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `Added Button.<button class="btn btn--close-cookie">got it</button>`;
topHead.prepend(message)
 //deleting node

document.querySelector('.btn--close-cookie').addEventListener('click',function(){
    message.remove();
})

message.style.backgroundColor ="#37383d"

//smooth scroll 

//add scroll to section when clicked

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener('click',function(e){
  const scrollCords = section1.getBoundingClientRect();

  // window.scrollTo(scrollCords.left + window.pageXOffset,scrollCords.top + window.pageYOffset)
  //we can add behavior too for that wrap the values in obj and pass behavior key value
  // window.scrollTo({left:scrollCords.left + window.pageXOffset,top:scrollCords.top + window.pageYOffset,behavior:'smooth'})

  //Modern approach

  section1.scrollIntoView({behavior:'smooth'})

});

//nav bar clikc scroll to that section
 //ineffeciney way
// document.querySelectorAll('.nav__link').forEach(function(el){el.addEventListener('click',function(e){
//   e.preventDefault();
//   const id = this.getAttribute('href');
  
//   document.querySelector(id).scrollIntoView({behavior:"smooth"}); //it is creating copy of every section which will effect the performance latter

// })
// })

 //efficient way - event delegation

 //1. adding event on parent (common ancestor)
 //2. detemine the originalted event

 document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault()
  console.log(e.target);
  if(e.target.classList.contains('nav__link')){
    console.log(e.target)
    const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({behavior:"smooth"});
  }
 })

 //tabbing 

 const tabs = document.querySelectorAll('.operations__tab');
 const tabContents = document.querySelectorAll('.operations__content');
 const tabContainer = document.querySelector('.operations__tab-container')

 tabContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');
//Guard phase
  if(!clicked)return;

  //remove previously active tabs
  tabs.forEach(e=>e.classList.remove('operations__tab--active'))
  tabContents.forEach(e=>e.classList.remove('operations__content--active'))
  //activatingtab
  
  clicked.classList.add('operations__tab--active')
  
document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')


 })


//lect

//event propagation 
// const randInt = (min,max)=>Math.floor(Math.random()*(max-min+1)+min);
// const randomColor = ()=> `rgb(${randInt(0,255)},${randInt(0,255)},${randInt(0,255)})`
// document.querySelector('.nav__link').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
// })

// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
// })

// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
// })