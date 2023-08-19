
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");


btnNavEl.addEventListener("click",function(){
    headerEl.classList.toggle("nav-open")
});


const topBtn = document.querySelector(".top-icon");

topBtn.addEventListener("click", topFunction);
window.onscroll = function() {scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }
}


function topFunction(){
    document.body.scrollTop = 0; //For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
}