var menuicon = document.querySelector("#menu");
var cut = document.querySelector("#cut");
var navlinks = document.querySelector(".nav-links");


menuicon.addEventListener("click",function(){
   navlinks.style.top = 0;
})
cut.addEventListener("click",function(){
    navlinks.style.top = "-100%";
})
