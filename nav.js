class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="logo-container flex-center-center">
        <div class="logo-container-section flex-center-end" >
            <a class="hover" href="/" id="Home">Home</a>
            <p>|</p>
            <a class="hover" href="/about" id="About">About</a>
        </div>
        <div class="logo-container-section flex-center-center" style="width: 250px;">
            <img src="src/otterstonelogo.png" onclick="window.open('/', '_self')" id="logo"/>
        </div>
        <div class="logo-container-section flex-center-start">
            <a class="hover" href="/reviews" id="Reviews">Reviews</a>
            <p class="pinkclay-text">|</p>
            <a class="hover" href="/contact" id="Contact">Contact</a>
        </div>
    </div>
    <div class="mobile-logo-container">
        <div class="flex-center-center" >
            <img onclick="window.open('index.html', '_self')" src="src/otterstonelogo.png" style="width: 50%;  height: auto;"/>
        </div>
        <div class="mobile-logo-container-section flex-center-spaceevenly">
        <a class="hover" href="/" id="HomeMobile">Home</a>
            <p>|</p>
            <a class="hover" href="/about" id="AboutMobile">About</a>
            <p>|</p>
            <a class="hover" href="/reviews" id="ReviewsMobile">Reviews</a>
            <p>|</p>
            <a class="hover" href="/contact" id="ContactMobile">Contact</a>
        </div>
    </div>
`;
    }
}

customElements.define('header-component', Header);

document.addEventListener("DOMContentLoaded", function() {
    var customName = document.getElementById("navigation").getAttribute("data-nav");
    document.getElementById(customName).classList.add("active-link");
    document.getElementById(customName + "Mobile").classList.add("active-link");
});
