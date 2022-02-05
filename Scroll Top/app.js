const scrollBtn = document.querySelector(".scrolltop");

document.addEventListener('scroll', function(e) {

    let currentScroll = window.scrollY;
    
    if(currentScroll > 600) {
        scrollBtn.style.display = "block";
    }
    else{
        scrollBtn.style.display = "none";
    }
    
});