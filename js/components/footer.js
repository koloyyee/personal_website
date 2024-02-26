class Footer extends HTMLElement {
  constructor() {
    super();
  }

  /**
   * Web component
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#Using_the_lifecycle_callbacks
   */
  connectedCallback() {
    this.innerHTML = `
        <footer>
          // <light-switch-component></light-switch-component> 
            <ul>
                <li class="footer_item"> <a href="https://www.github.com/koloyyee">
                <svg></svg>
                </a></li>
                <li class="footer_item"> <a href="https://www.linkedin.com/in/ko-loy-yee">home</a></li>
            </ul>
      </foot>
    `;
  }
}

/*
 *JS DOM Global Function
 */
customElements.define("footer-component", Footer);
