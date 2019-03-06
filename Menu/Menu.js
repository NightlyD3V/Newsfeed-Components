
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  menu.classList.toggle('menu--open');
  if(menu.classList.contains('menu--open')){
    // text.style.display = 'flex';
    // text.style.justifyContent = 'center';
    TweenMax.from(menu,2,{left: '-250px', ease: Bounce.easeOut});
    TweenMax.to(articles,2,{left:250, width: '50%',ease:Back.easeOut});
  } else {
    TweenMax.to(articles,2,{left:'0', width: '80%',ease:Back.easeOut})
  }
}
const header = document.querySelector('h1');
window.onload = function() {
  TweenMax.from(header,2,{x:'200px'});
}
// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');

const text = document.querySelectorAll('.text');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', toggleMenu);