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
    console.log("called")
}

// Call the function when the window loads or resizes
window.addEventListener("load", setMainMinHeight);
window.addEventListener("resize", setMainMinHeight);
