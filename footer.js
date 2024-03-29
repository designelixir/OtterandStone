class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <footer class="centered">
      <img src="src/OtterStone-Tertiary-Black.svg" alt="Otter and Stone Tertiary Logo" style="width: 100px"/><br><br>
      <div style="display: inline-flex">
          <a class="icon hover" href="tel:816-225-3711"><img class="hover" src="src/phone-call-white.png" style="width: 20px; margin-right: 10px;"/></a>
          <a class="icon hover" href="mailto:cam@otterandstone.com"><img class="hover" src="src/email-white.png" style="width: 25px;"/></a>
      </div>
      <p class="cream-text">Copyright &copy; Otter &amp; Stone 2021</p>
      <a target="_blank" href="https://designelixir.studio" style="color: white; text-decoration: none; font-size: 12px">Made with &hearts; by Design Elixir Studio </a>
  </footer>
  `;
    }
  }
  
  customElements.define('footer-component', Footer);
  