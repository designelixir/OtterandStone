function setMainMinHeight() {
    // Get window height
    var windowHeight = window.innerHeight;

    // Get header height
    var headerHeight = document.querySelector("header").offsetHeight + 75;

    // Get footer height
    var footerHeight = document.querySelector("footer").offsetHeight;

    // Calculate main min height
    var mainMinHeight = windowHeight - headerHeight - footerHeight;

    // Set main min height
    document.querySelector("main").style.minHeight = mainMinHeight + "px";
    
}

function fadeOut(){
    var fader = document.getElementById('fadeOver')
    fader.style.animation = 'fade-out 1s ease-out both';
    setTimeout(function(){
        fader.style.display = 'none!important'
    }, 1500)
}

window.addEventListener("load", fadeOut);

// Call the function when the window loads or resizes
window.addEventListener("load", setMainMinHeight);
window.addEventListener("resize", setMainMinHeight);
