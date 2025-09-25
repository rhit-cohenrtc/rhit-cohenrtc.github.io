
class PageHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
            Tristan Cohen-Rider
        </header>
        <nav>
            <a href="index.html">Home Page</a>
            <a href="resume.html">Expirences</a>
            <a href="portfolio.html">Projects</a>
        </nav>
      `;
  }
}

customElements.define('page-header', PageHeader);