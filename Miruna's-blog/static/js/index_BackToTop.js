function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollToTopBtn").style.display = "none";
    }
}