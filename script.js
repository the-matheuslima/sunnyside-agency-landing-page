const hamburger = document.querySelector(".navbar-mobile");  
 const navsub = document.querySelector(".navbar-item");  
 hamburger.addEventListener('click', () => {  
  hamburger.classList.toggle("change")  
  navsub.classList.toggle("nav-change")  
 });  