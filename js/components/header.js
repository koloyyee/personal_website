class Header extends HTMLElement {
  constructor() {
    super();
  }

  /**
   * Web component
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#Using_the_lifecycle_callbacks
   */
  connectedCallback() {
    this.innerHTML = `
        <header>
        <nav class="main_nav">
            <ul>
                <li class="nav_item"> <a href="index.html">home</a></li>
                <li class="nav_item"> <a href="resume.html">resume </a></li>
                <li class="nav_item"> <a href="projects.html">projects </a></li>
                <li class="nav_item"> <a href="contact.html">contact</a></li>
            </ul>
        </nav>
      </header>
    `;
  }
}

/*
 *JS DOM Global Function 
 */
customElements.define("header-component", Header);
