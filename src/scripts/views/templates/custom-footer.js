class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <ul>
        <li>Copyright © 2023 - Hangout!</li>
        <li>Made with ❤️ By YogaTirta</li>
      </ul>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
