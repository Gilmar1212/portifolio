
  var menuActivate = document.querySelector("#menu-activate");
  var menu = document.querySelector(".Menu");
  menuActivate.addEventListener("click",()=>{
   menu.classList.toggle("menuShow");
  });
  menuActivate.removeEventListener();
