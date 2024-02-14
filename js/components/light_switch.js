class LightSwitch extends HTMLElement {
  constructor() {
    super();
  }

  /**
   * Web component
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#Using_the_lifecycle_callbacks
   */
  connectedCallback() {
    this.innerHTML = `
      <button type="button" data-theme-toggle aria-label="Change to light theme">🌞</button>
    `;
  }
}

/*
 *JS DOM Global Function 
 */
customElements.define("light-switch-component", LightSwitch);
